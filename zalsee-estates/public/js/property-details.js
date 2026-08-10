(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var name = params.get('name') || 'Featured Property';
  var location = params.get('location') || 'Mbarara, Uganda';
  var price = params.get('price') || 'Price on request';
  var size = params.get('size') || 'Contact us for details';
  var image = params.get('image') || 'land1.jpg';
  var description = params.get('description') || 'A well-positioned plot with clear documentation and helpful guidance from the Zalseef Estates team.';

  document.title = 'Zalseef Estates | ' + name;
  document.getElementById('detail-name').textContent = name;
  document.getElementById('detail-heading').textContent = name;
  document.getElementById('detail-price').textContent = price;
  document.getElementById('detail-location').textContent = location;
  document.getElementById('detail-size').textContent = size;
  document.getElementById('detail-description').textContent = description;
  document.getElementById('detail-image').style.backgroundImage = "url('images/assets/images/lands/" + encodeURIComponent(image).replace(/%2F/g, '/') + "')";
})();
