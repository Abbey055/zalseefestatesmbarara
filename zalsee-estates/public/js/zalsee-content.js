(function () {
  'use strict';

  var activePropertyFilters = null;

  var replacements = [
    ['A small river named Duden flows by their place and supplies it with the necessary regelialia.', 'Trusted land guidance, verified opportunities, and practical support for buyers in Mbarara and nearby areas.'],
    ['Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'Zalseef Estates helps you find and understand land opportunities with clear information, guided site visits, and support through the buying process.'],
    ['Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,', 'Zalseef Estates helps you find and understand land opportunities with clear information.'],
    ['New Home Sales Picked Up in December', 'What to check before buying land in Uganda'],
    ['Dec. 01, 2020', 'Zalseef Estates'],
    ['Admin', 'Zalseef Team'],
    ['John Dorf', 'Muhammad Muhumuza'],
    ['Sunny Loft Property', 'Ahari Ibiiri Plot'],
    ['203 Fake St. Mountain View, San Francisco, California, USA', 'St Paul Shopping Mall, Room C10, Mbarara, Uganda'],
    ['198 West 21th Street, Suite 721 New York NY 10016', 'St Paul Shopping Mall, Room C10, Mbarara, Uganda'],
    ['Suite 721 New York NY 10016', 'St Paul Shopping Mall, Room C10, Mbarara, Uganda'],
    ['info@yourdomain.com', 'zalseefmhd256@gmail.com'],
    ['+2 392 3929 210', '+256 708 124902'],
    ['New York', 'Mbarara'],
    ['London', 'Biharwe'],
    ['Chicago', 'Kakoba'],
    ['Illinois', 'Nyamitanga'],
    ['California', 'Rwebikona'],
    ['Tennessee', 'Kakoba'],
    ['Texas', 'Biharwe'],
    ['North Carolina', 'Mbarara City'],
    ['Florida', 'Buhweju'],
    ['Charlotte', 'Ntare'],
    ['Orlando', 'Nyakayojo'],
    ['Atlanta', 'Kashari'],
    ['Your Property Is Our Priority', 'Find land you can build on with confidence'],
    ['Let Your Home Be Unique & Stylist', 'Land opportunities in Mbarara and beyond'],
    ['Modern House Make Better Life', 'A better path to owning land'],
    ['Submit A Property', 'List Your Land'],
    ['Rent Properties', 'Land Opportunities'],
    ['Modern House Video', 'Land buying made clearer'],
    ['Find Best Place For Leaving', 'Find the right place for your next chapter'],
    ['Find Best Place For Leaving', 'Explore land opportunities with Zalseef Estates']
  ];

  function updateText() {
    var nodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = nodes.nextNode())) {
      var value = node.nodeValue;
      replacements.forEach(function (pair) { value = value.split(pair[0]).join(pair[1]); });
      if (/Duden|regelialia/i.test(value)) value = 'Trusted land guidance, verified opportunities, and practical support for buyers in Mbarara and nearby areas.';
      if (/Vokalia|Consonantia|Bookmarksgrove|Semantics/i.test(value)) value = 'Zalseef Estates helps you find and understand land opportunities with clear information, guided site visits, and support through the buying process.';
      node.nodeValue = value;
    }
    document.title = 'Zalseef Estates | Trusted Land Dealers in Mbarara';
  }

  function updateHome() {
    var slides = document.querySelectorAll('.hero-slider .item');
    var copy = [
      'Find land you can build on with confidence',
      'Land opportunities in Mbarara and beyond',
      'A better path to owning land'
    ];
    var descriptions = [
      'Explore residential, executive, agricultural, and investment-ready land with a team that keeps the details clear.',
      'Browse practical options around Mbarara, compare locations, and arrange a guided site visit before you decide.',
      'From your first inquiry to documentation questions, Zalseef Estates helps make land ownership feel more straightforward.'
    ];
    slides.forEach(function (slide, index) {
      var heading = slide.querySelector('h2');
      var text = slide.querySelector('.text p.mb-5');
      if (heading) heading.textContent = copy[index];
      if (text) text.textContent = descriptions[index];
    });
    updateProperties();
  }

  function updateProperties() {
    var listings = [
      { name: 'Igyereka Plot', location: 'Igyereka, Mbarara', price: 2300000, size: '27x55', image: 'land1.jpg', description: 'Affordable residential plot in Igyereka. Perfect for first-time home buyers. Surveyed with clear documentation.' },
      { name: 'Ahari Ibiiri Plot', location: 'Ahari Ibiiri, Mbarara', price: 2900000, size: '25x50', image: 'land2.jpg', description: 'Well-located plot in Ahari Ibiiri. Great value for money with easy access to main road.' },
      { name: 'Nyarubungo Plot A', location: 'Nyarubungo, Mbarara', price: 3200000, size: '30x80', image: 'land3.jpg', description: 'Scenic plot on Nyarubungo with beautiful views. Multiple size options available.' },
      { name: 'Nyarubungo Plot B', location: 'Nyarubungo, Mbarara', price: 3200000, size: '22x85', image: 'land4.jpg', description: 'Alternative size option in prime Nyarubungo location.' },
      { name: 'Kiyenze Plot', location: 'Kiyenze, Mbarara', price: 3200000, size: '25x50', image: 'land5.jpg', description: 'Affordable residential plot in developing Kiyenze area.' },
      { name: 'Rwendezi Plot', location: 'Rwendezi, Mbarara', price: 3300000, size: '30x55', image: 'land6.jpg', description: 'Well-positioned plot in Rwendezi with good neighborhood.' },
      { name: 'Rwenshebashaba Plot', location: 'Rwenshebashaba, Mbarara', price: 3300000, size: '25x55', image: 'land7.jpg', description: 'Affordable plot in growing Rwenshebashaba community.' },
      { name: 'Karubanda Plot A', location: 'Karubanda, Mbarara', price: 3500000, size: '25x55', image: 'land8.jpg', description: 'Prime residential plot in desirable Karubanda area.' },
      { name: 'Karubanda Plot B', location: 'Karubanda, Mbarara', price: 4500000, size: '35x50', image: 'land9.jpg', description: 'Spacious residential plot in prime Karubanda location.' },
      { name: 'Karubanda Plot C', location: 'Karubanda, Mbarara', price: 4500000, size: '25x50', image: 'land10.jpg', description: 'Standard residential plot in Karubanda.' },
      { name: 'Igyereka Plot B', location: 'Igyereka, Mbarara', price: 4800000, size: '30x60', image: 'land11.jpg', description: 'Multiple size options in popular Igyereka area.' },
      { name: 'Igyereka Plot C', location: 'Igyereka, Mbarara', price: 5500000, size: '30x105', image: 'land12.jpg', description: 'Larger plot in Igyereka for more space.' },
      { name: 'Igyereka Plot D', location: 'Igyereka, Mbarara', price: 6000000, size: '35x105', image: 'land13.jpg', description: 'Executive size plot in Igyereka.' },
      { name: 'Rubeho Plot A', location: 'Rubeho, Mbarara', price: 5000000, size: '30x50', image: 'land14.jpg', description: 'Well-located plot in Rubeho with good dimensions.' },
      { name: 'Rubeho Plot B', location: 'Rubeho, Mbarara', price: 5500000, size: '25x100', image: 'land15.jpg', description: 'Longer plot in Rubeho for more flexibility.' },
      { name: 'Ahari Ibiiri Large Plot', location: 'Ahari Ibiiri, Mbarara', price: 6000000, size: '50x100', image: 'land16.jpg', description: 'Spacious plot in Ahari Ibiiri for larger projects.' },
      { name: 'Kabaare Kihogo Plot', location: 'Kabaare Kihogo, Mbarara', price: 5500000, size: '30x50', image: 'land17.jpg', description: 'Affordable plot in Kabaare Kihogo area.' },
      { name: 'Omukabira Plot', location: 'Omukabira, Mbarara', price: 6500000, size: '25x50', image: 'land18.jpg', description: 'Well-positioned plot in Omukabira.' },
      { name: 'Rukuba Plot', location: 'Rukuba, Mbarara', price: 6500000, size: '25x50', image: 'land19.jpg', description: 'Affordable plot in Rukuba area.' },
      { name: 'Rwenshebashaba Large Plot', location: 'Rwenshebashaba, Mbarara', price: 7000000, size: '25x80', image: 'land20.jpg', description: 'Larger plot in Rwenshebashaba.' },
      { name: 'Rweiziringiro Plot', location: 'Rweiziringiro, Mbarara', price: 7000000, size: '30x60', image: 'land21.jpg', description: 'Well-sized plot in Rweiziringiro.' },
      { name: 'Omukabira Kangyeya Plot', location: 'Omukabira Kangyeya, Mbarara', price: 7500000, size: '30x80', image: 'land22.jpg', description: 'Spacious plot in Omukabira Kangyeya.' },
      { name: 'Karubanda Large Plot', location: 'Karubanda, Mbarara', price: 7500000, size: '25x75', image: 'land23.jpg', description: 'Large residential plot in Karubanda.' },
      { name: 'Masha Mile 1 Plot', location: 'Masha Mile 1, Mbarara', price: 7800000, size: '50x100', image: 'land24.jpg', description: 'Prime plot in Masha Mile 1.' },
      { name: 'Masha Mile 2 Plot', location: 'Masha Mile 2, Mbarara', price: 7800000, size: '50x100', image: 'land25.jpg', description: 'Excellent plot in Masha Mile 2.' },
      { name: 'Aharyemu Plot', location: 'Aharyemu, Mbarara', price: 7800000, size: '50x100', image: 'land26.jpg', description: 'Spacious plot in Aharyemu.' },
      { name: 'Kaberere Town Plot', location: 'Kaberere Town, Mbarara', price: 8000000, size: '50x100', image: 'land27.jpg', description: 'Commercial-residential plot in Kaberere Town.' },
      { name: 'Nyarubungo Executive Plot', location: 'Nyarubungo, Mbarara', price: 8000000, size: '55x100', image: 'land28.jpg', description: 'Executive plot in scenic Nyarubungo.' },
      { name: 'Omukafunda Executive Plot', location: 'Omukafunda, Mbarara', price: 10000000, size: '50x100', image: 'land29.jpg', description: 'Premium executive plot in Omukafunda.' },
      { name: 'Makenke Executive Plot', location: 'Makenke, Mbarara', price: 11000000, size: '60x100', image: 'land30.jpg', description: 'Spacious executive plot in Makenke.' },
      { name: 'Karubanda Executive Plot', location: 'Karubanda, Mbarara', price: 11000000, size: '50x100', image: 'land31.jpg', description: 'Prime executive plot in Karubanda.' },
      { name: 'Kiyenze Executive Plot', location: 'Kiyenze, Mbarara', price: 11000000, size: '60x100', image: 'land32.jpg', description: 'Large executive plot in Kiyenze.' },
      { name: 'Kaberebere Executive Plot', location: 'Kaberebere, Mbarara', price: 11000000, size: '50x100', image: 'land33.jpg', description: 'Premium executive plot in Kaberebere.' },
      { name: 'Karubanda-Rubeho Border Plot', location: 'Karubanda/Rubeho Border, Mbarara', price: 12000000, size: '25x100', image: 'land34.jpg', description: 'Unique plot on the border of Karubanda and Rubeho.' }
    ];
    var allListings = listings;
    if (activePropertyFilters) {
      listings = listings.filter(function (listing) {
        var text = (listing.name + ' ' + listing.location + ' ' + listing.description).toLowerCase();
        var keywordMatch = !activePropertyFilters.keyword || text.indexOf(activePropertyFilters.keyword) !== -1;
        var locationMatch = !activePropertyFilters.location || listing.location.toLowerCase().indexOf(activePropertyFilters.location) !== -1;
        var typeMatch = !activePropertyFilters.type || activePropertyFilters.type === 'land' || activePropertyFilters.type === 'residential';
        var priceMatch = !activePropertyFilters.price || listing.price >= activePropertyFilters.price.min && listing.price < activePropertyFilters.price.max;
        return keywordMatch && locationMatch && typeMatch && priceMatch;
      });
    }
    bindPropertySearch(allListings);
    var cards = document.querySelectorAll('.property-wrap');
    var isHomepage = document.body.classList.contains('homepage');
    var pagination = document.querySelector('.block-27');
    var pageSize = 8;
    var currentPage = pagination ? parseInt(pagination.getAttribute('data-page') || '1', 10) : 1;
    var pageCount = Math.ceil(listings.length / pageSize);
    if (pagination) {
      currentPage = Math.max(1, Math.min(currentPage, pageCount));
      pagination.setAttribute('data-page', currentPage);
      pagination.setAttribute('data-page-count', pageCount);
      setupPagination(pagination, pageCount);
      pagination.querySelectorAll('li').forEach(function (item) { item.classList.remove('active'); });
      pagination.querySelectorAll('a, span').forEach(function (item) {
        if (item.textContent.trim() === String(currentPage)) item.parentElement.classList.add('active');
      });
      pagination.querySelectorAll('li').forEach(function (item) {
        var label = item.textContent.trim();
        var number = parseInt(label, 10);
        item.style.display = !isNaN(number) && number > pageCount ? 'none' : '';
      });
    }
    cards.forEach(function (card, index) {
      var listingIndex = pagination ? ((currentPage - 1) * pageSize) + index : index;
      var listing = listings[listingIndex];
      var cardColumn = card.parentElement;
      if (!listing) {
        if (cardColumn) cardColumn.style.display = 'none';
        return;
      }
      if (cardColumn) cardColumn.style.display = '';
      var image = card.querySelector('.img-property');
      var title = card.querySelector('.text h3 a');
      var location = card.querySelector('.location');
      var price = card.querySelector('.orig-price');
      var oldPrice = card.querySelector('.old-price');
      var agent = card.querySelector('.list-team h3');
      var date = card.querySelector('.list-team .text-right');
      var specs = card.querySelector('.property_list');
      if (image) image.style.backgroundImage = "url('images/assets/images/lands/" + listing.image + "')";
      if (title) title.textContent = listing.name;
      if (location) location.innerHTML = '<i class="ion-ios-pin"></i> ' + listing.location + ' <span class="sale">Available</span>';
      if (price) price.textContent = formatUGX(listing.price);
      if (oldPrice) oldPrice.remove();
      if (agent) agent.textContent = 'Muhammad Muhumuza';
      if (date) date.textContent = '2 weeks ago';
      if (specs) specs.innerHTML = '<li><span class="flaticon-blueprint"></span>' + listing.size + '</li><li><span class="fa fa-file-text-o"></span> Title ready</li><li><span class="fa fa-map-marker"></span> Site visit</li>';
      var detailUrl = '/property-details?name=' + encodeURIComponent(listing.name) +
        '&location=' + encodeURIComponent(listing.location) +
        '&price=' + encodeURIComponent(formatUGX(listing.price)) +
        '&size=' + encodeURIComponent(listing.size) +
        '&image=' + encodeURIComponent(listing.image) +
        '&description=' + encodeURIComponent(listing.description);
      if (image) image.setAttribute('href', detailUrl);
      if (title) title.setAttribute('href', detailUrl);
      if (card.getAttribute('data-detail-bound') !== 'true') {
        card.setAttribute('data-detail-bound', 'true');
        card.classList.add('property-detail-link');
        card.addEventListener('click', function (event) {
          if (!event.target.closest('a')) window.location.href = detailUrl;
        });
      }
      var description = card.querySelector('.property-description');
      if (isHomepage && description) {
        description.remove();
      } else if (!isHomepage) {
        if (!description) {
          description = document.createElement('p');
          description.className = 'property-description';
          var heading = card.querySelector('.text > h3');
          if (heading && heading.parentNode) heading.parentNode.insertBefore(description, heading.nextSibling);
        }
        description.textContent = listing.description;
      }
    });

    document.querySelectorAll('.blog-entry').forEach(function (card, index) {
      var listing = allListings[index];
      if (!listing) return;
      var detailUrl = '/property-details?name=' + encodeURIComponent(listing.name) +
        '&location=' + encodeURIComponent(listing.location) +
        '&price=' + encodeURIComponent(formatUGX(listing.price)) +
        '&size=' + encodeURIComponent(listing.size) +
        '&image=' + encodeURIComponent(listing.image) +
        '&description=' + encodeURIComponent(listing.description);
      var image = card.querySelector('a.block-20');
      var title = card.querySelector('h3 a');
      if (image) image.setAttribute('href', detailUrl);
      if (title) title.setAttribute('href', detailUrl);
      if (card.getAttribute('data-detail-bound') !== 'true') {
        card.setAttribute('data-detail-bound', 'true');
        card.addEventListener('click', function (event) {
          if (!event.target.closest('a')) window.location.href = detailUrl;
        });
      }
    });
  }

  function setupPagination(pagination, pageCount) {
    if (pagination.getAttribute('data-bound') === 'true') return;
    pagination.setAttribute('data-bound', 'true');
    pagination.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!link) return;
      event.preventDefault();
      var current = parseInt(pagination.getAttribute('data-page') || '1', 10);
      var label = link.textContent.trim();
      var totalPages = parseInt(pagination.getAttribute('data-page-count') || pageCount, 10);
      var target = label === '<' ? current - 1 : label === '>' ? current + 1 : parseInt(label, 10);
      if (!isNaN(target)) {
        target = Math.max(1, Math.min(target, totalPages));
        pagination.setAttribute('data-page', target);
        updateProperties();
        var section = pagination.closest('.ftco-section');
        if (section) window.scrollTo({ top: section.offsetTop - 20, behavior: 'smooth' });
      }
    });
  }

  function bindPropertySearch(listings) {
    document.querySelectorAll('.search-property-1').forEach(function (form) {
      if (form.getAttribute('data-bound') === 'true') return;
      form.setAttribute('data-bound', 'true');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var fields = form.querySelectorAll('input, select');
        var keyword = (fields[0].value || '').trim().toLowerCase();
        var type = (fields[1].selectedOptions[0].textContent || '').trim().toLowerCase();
        var location = (fields[2].value || '').trim().toLowerCase();
        var priceLabel = (fields[3].selectedOptions[0].textContent || '').trim().toLowerCase();
        var price = null;
        var range = priceLabel.match(/(\d+)m\s*-\s*(\d+)m/);
        if (range) price = { min: Number(range[1]) * 1000000, max: Number(range[2]) * 1000000 + 1 };
        else if (priceLabel.indexOf('20m+') !== -1) price = { min: 20000000, max: Infinity };
        activePropertyFilters = { keyword: keyword, type: type, location: location, price: price };
        var pagination = document.querySelector('.block-27');
        if (pagination) pagination.setAttribute('data-page', '1');
        updateProperties();
      });
    });
  }

  function formatUGX(value) {
    return 'Shs ' + (value / 1000000).toFixed(1) + 'M';
  }

  function updateCurrencyAndStats() {
    var ugxRanges = [2400000, 3000000, 5000000, 7000000, 10000000, 15000000, 25000000, 50000000];
    var priceIndex = 0;
    document.querySelectorAll('option').forEach(function (option) {
      var value = option.textContent.trim();
      var match = value.match(/^\$([\d,]+)/);
      if (match) {
        var amount = ugxRanges[priceIndex % ugxRanges.length];
        priceIndex += 1;
        option.textContent = 'UGX ' + amount.toLocaleString();
      }
    });
    var counters = document.querySelectorAll('.counter');
    if (counters.length >= 4) {
      var stats = [10, 2000, 1000, 34];
      var labels = ['Years Experience', 'Plots Sold', 'Happy Clients', 'Available Plots'];
      counters.forEach(function (counter, index) {
        counter.setAttribute('data-count', stats[index % stats.length]);
        var label = counter.closest('.counter-wrap');
        var text = label && label.querySelector('p');
        if (text) text.textContent = labels[index % labels.length];
      });
    }
  }

  function updateImages() {
    var imageMap = {
      'images/about.jpg': 'images/assets/images/hero/about-banner-1.jpeg',
      'images/about-1.jpg': 'images/assets/images/hero/about-banner-2.jpg',
      'images/bg_4.jpg': 'images/assets/images/hero/hero-land.jpg',
      'images/work-1.jpg': 'images/assets/images/lands/land1.jpg',
      'images/work-2.jpg': 'images/assets/images/lands/land2.jpg',
      'images/work-3.jpg': 'images/assets/images/lands/land3.jpg',
      'images/work-4.jpg': 'images/assets/images/lands/mbarara.jpg',
      'images/person_1.jpg': 'images/assets/images/agents/CEO.jpg'
    };
    document.querySelectorAll('[style*="background-image"], img').forEach(function (element) {
      var source = element.getAttribute('style') || element.getAttribute('src') || '';
      Object.keys(imageMap).forEach(function (oldPath) {
        if (source.indexOf(oldPath) !== -1) {
          var newPath = imageMap[oldPath];
          if (element.hasAttribute('src')) element.setAttribute('src', newPath);
          else element.style.backgroundImage = "url('" + newPath + "')";
        }
      });
    });
  }

  function updateLinks() {
    document.querySelectorAll('a[href="#"]').forEach(function (link) {
      var label = (link.textContent || '').toLowerCase();
      if (label.indexOf('contact') !== -1 || label.indexOf('get in touch') !== -1) link.href = '/contact';
      if (label.indexOf('property') !== -1 || label.indexOf('learn more') !== -1) link.href = '/properties';
    });
    document.querySelectorAll('a[href="https://facebook.com"]').forEach(function (link) { link.href = 'https://www.facebook.com/zalseefestates'; });
    document.querySelectorAll('a[href="https://instagram.com"]').forEach(function (link) { link.href = 'https://www.instagram.com/zalseef_estates'; });
    document.querySelectorAll('a[href="https://youtube.com"]').forEach(function (link) { link.href = 'https://www.youtube.com/@ZalseefEstates'; });
  }

  function init() {
    updateText();
    updateImages();
    updateLinks();
    updateCurrencyAndStats();
    if (document.querySelector('.hero-slider')) updateHome();
    else if (document.querySelector('.property-wrap') || document.querySelector('.blog-entry')) updateProperties();
    setTimeout(function () {
      if (document.querySelector('.property-wrap') || document.querySelector('.blog-entry')) updateProperties();
    }, 80);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
