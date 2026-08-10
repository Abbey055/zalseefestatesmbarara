import { useEffect, useState } from 'react';

const scripts = new Map();

function loadScript(source) {
  if (scripts.has(source)) return scripts.get(source);
  const promise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = source;
    script.onload = resolve;
    script.onerror = resolve;
    document.body.appendChild(script);
  });
  scripts.set(source, promise);
  return promise;
}

function normalizeMarkup(markup) {
  const document = new DOMParser().parseFromString(markup, 'text/html');
  document.querySelectorAll('[src], [href], [style]').forEach((element) => {
    ['src', 'href'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && /^(images|css|js|fonts)\//.test(value)) element.setAttribute(attribute, `/${value}`);
    });
    const style = element.getAttribute('style');
    if (style) element.setAttribute('style', style.replaceAll('url(images/', 'url(/images/'));
  });
  document.querySelectorAll('img').forEach((image, index) => {
    image.loading = index < 2 ? 'eager' : 'lazy';
    image.decoding = 'async';
  });
  document.querySelectorAll('[style*="background-image"]').forEach((element, index) => {
    if (index < 3) return;
    const style = element.getAttribute('style') || '';
    const match = style.match(/background-image\s*:\s*([^;]+)/i);
    if (!match) return;
    element.setAttribute('data-lazy-background', match[1].trim());
    element.style.backgroundImage = 'none';
  });
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    rel.add('noopener');
    rel.add('noreferrer');
    link.setAttribute('rel', [...rel].join(' '));
  });
  document.querySelectorAll('a[href*=".html"]').forEach((link) => {
    const value = link.getAttribute('href');
    const [path, query = ''] = value.split('?');
    const page = path.replace(/^\//, '').replace('.html', '');
    link.setAttribute('href', `${page === 'index' ? '/' : `/${page}`}${query ? `?${query}` : ''}`);
  });
  document.querySelectorAll('script').forEach((script) => script.remove());
  const footer = document.querySelector('footer .bg-darken .text-center p');
  if (footer) {
    const credit = document.createElement('span');
    credit.className = 'developer-credit';
    credit.innerHTML = ' | Designed by <a href="mailto:ssenktechug055@gmail.com">ssenktechug055@gmail.com</a>';
    footer.appendChild(credit);
  }
  return document.body.innerHTML;
}

function observeLazyBackgrounds() {
  const elements = [...document.querySelectorAll('[data-lazy-background]')];
  const load = (element) => {
    element.style.backgroundImage = element.dataset.lazyBackground;
    element.removeAttribute('data-lazy-background');
  };
  if (!('IntersectionObserver' in window)) {
    elements.forEach(load);
    return;
  }
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      load(entry.target);
      instance.unobserve(entry.target);
    });
  }, { rootMargin: '300px 0px' });
  elements.forEach((element) => observer.observe(element));
}

export default function LegacyPage({ source }) {
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    let active = true;
    fetch(`/content/${source}`).then((response) => response.text()).then((html) => {
      if (active) setMarkup(normalizeMarkup(html));
    });
    return () => { active = false; };
  }, [source]);

  useEffect(() => {
    if (!markup) return undefined;
    let cancelled = false;
    (async () => {
      await loadScript('/js/bootstrap.bundle.min.js');
      if (/hero-slider|carousel-testimony/.test(markup)) await loadScript('/js/tiny-slider.js');
      if (/glightbox|lightbox/.test(markup)) await loadScript('/js/glightbox.min.js');
      await loadScript('/js/aos.js');
      await loadScript('/js/main.js');
      if (source === 'property-details.html') await loadScript('/js/property-details.js');
      if (!cancelled) await loadScript('/js/zalsee-content.js?v=zalseef-react-v2');
    })();
    return () => { cancelled = true; };
  }, [markup, source]);

  useEffect(() => {
    if (markup) observeLazyBackgrounds();
  }, [markup]);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
