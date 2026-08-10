
var google;

function init() {
    // Mbarara City Mall / St. Paul Shopping Mall, Buremba Road.
    var myLatlng = new google.maps.LatLng(-0.607438, 30.662150);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map.
    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Zalseef Estates - St. Paul Shopping Mall'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<strong>Zalseef Estates</strong><br>St. Paul Shopping Mall, Room C-10<br>Mbarara, Uganda'
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
    
}
google.maps.event.addDomListener(window, 'load', init);
