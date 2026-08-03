(function () {
  'use strict';

  var replacements = [
    ['Oakberry - Free Bootstrap 5 Template by Colorlib', 'Zalseef Estates | Trusted Land Dealers in Mbarara'],
    ['Oakberry A Real Estate Company', 'Zalseef Estates | Land made clear'],
    ['Oakberry', 'Zalseef Estates'],
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
      { name: 'Igyereka Plot', location: 'Igyereka, Mbarara', price: 2400000, size: '27x55', image: 'land1.jpg', description: 'Affordable residential plot with clear documentation, suitable for a first home.' },
      { name: 'Ahari Ibiiri Plot', location: 'Ahari Ibiiri, Mbarara', price: 2900000, size: '25x50', image: 'land2.jpg', description: 'Well-located residential plot with road access and good value for money.' },
      { name: 'Nyarubungo Plot A', location: 'Nyarubungo, Mbarara', price: 3200000, size: '30x80', image: 'land3.jpg', description: 'Scenic surveyed plot with beautiful views and multiple size options.' },
      { name: 'Kiyenze Plot', location: 'Kiyenze, Mbarara', price: 3500000, size: '25x50', image: 'mbarara.jpg', description: 'Affordable residential land in a developing area with investment potential.' },
      { name: 'Karubanda Plot', location: 'Karubanda, Mbarara', price: 4500000, size: '35x50', image: 'land4.jpg', description: 'Spacious surveyed plot in a prime and desirable residential location.' },
      { name: 'Rubeho Plot', location: 'Rubeho, Mbarara', price: 5000000, size: '30x50', image: 'land5.jpg', description: 'Well-positioned land with good dimensions and flexible development use.' },
      { name: 'Nyarubungo Executive Plot', location: 'Nyarubungo, Mbarara', price: 8000000, size: '55x100', image: 'mbarara1.jpg', description: 'Executive plot in a scenic location, surveyed and ready for serious buyers.' },
      { name: 'Omukafunda Executive Plot', location: 'Omukafunda, Mbarara', price: 10000000, size: '50x100', image: 'mbarara2.jpg', description: 'Premium executive plot with utilities and strong long-term value.' }
    ];
    var cards = document.querySelectorAll('.property-wrap');
    var isHomepage = document.body.classList.contains('homepage');
    cards.forEach(function (card, index) {
      var listing = listings[index % listings.length];
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
      var stats = [34, 34, 5, 1];
      var labels = ['Listed Properties', 'Title-Ready Plots', 'Focus Areas', 'Trusted Team'];
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
      if (label.indexOf('contact') !== -1 || label.indexOf('get in touch') !== -1) link.href = 'contact.html';
      if (label.indexOf('property') !== -1 || label.indexOf('learn more') !== -1) link.href = 'properties.html';
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
    else if (document.querySelector('.property-wrap')) updateProperties();
    setTimeout(function () {
      if (document.querySelector('.property-wrap')) updateProperties();
    }, 80);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
