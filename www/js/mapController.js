angular.module('mapcontroller', [])
.controller('MapCtrl', function($scope) {
  $scope.init = function() {
    var map = L.map('map').setView([60.293738, 24.554985], 14);
    var layer = L.tileLayer('http://{s}.tiles.mapbox.com/v3/thienbao92.jh2og94p/{z}/{x}/{y}.jpg', { maxZoom: 17}).addTo(map);

    //Geolocation
        L.control.locate({
                position: 'topleft',  // set the location of the control
                locateOptions: {enableHighAccuracy: true},  // define location options e.g enableHighAccuracy: true or maxZoom: 10

                drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
                follow: true,  // follow the user's location
                setView: true, // automatically sets the map view to the user's location, enabled if `follow` is true
                keepCurrentZoomLevel: true, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
                stopFollowingOnDrag: true, // stop following when the map is dragged if `follow` is true (deprecated, see below)
                remainActive: true, // if true locate control remains active on click even if the user's location is in view.
                markerClass: L.circleMarker, // L.circleMarker or L.marker
                circleStyle: {},  // change the style of the circle around the user's location
                markerStyle: {},
                followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
                followMarkerStyle: {},
                icon: 'fa fa-map-marker',  // class for icon, fa-location-arrow or fa-map-marker
                iconLoading: 'fa fa-spinner fa-spin',  // class for loading icon
                circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
                metric: true,  // use metric or imperial units
                onLocationError: function(err) {alert(err.message)},  // define an error callback function
                onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
                        alert(context.options.strings.outsideMapBoundsMsg);
                },
                 showPopup: true, // display a popup when the user click on the inner marker
                // strings: {
                //     title: "Show me where I am",  // title of the locate control
                //     popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
                //     outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
                // }
            }).addTo(map);
	//Group Layer
            var baseLayers = {
                //icon
            };

            var overlayLayers ={
                "Trail" : {
                     "Red Trail" : L.geoJson(redtrail, {
                        style: redTrail,
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup('This is red Trail! <br/> 2Km');
                        }
                    }),

                     "Blue Trail" : L.geoJson(bluetrail, {
                        style: blueTrail,
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup('This is Blue Trail! <br/> 4Km');
                        }
                    }),

                     "Yellow Trail" : L.geoJson(yellowtrail, {
                        style: yellowTrail,
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup('This is Yellow Trail! <br/> 7Km');
                        }
                    }),

                     "Brown Trail" : L.geoJson(browntrail, {
                        style: brownTrail,
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup('This is Brown Trail! <br/> 4Km');
                        }
                    }),

                     "Wheelchair Trail" : L.geoJson(wheelchairtrail, {
                        style: wheelchairTrail,
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup('This is Wheelchair Trail! <br/> 2 Km');
                        }
                    }),
                    
                },

                "Points" : {
                        "Info" : L.geoJson(point, {

                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, {icon: infoIcon});
                    }
                }),

                        "Fishing" : L.geoJson(fishing, {

                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, {icon: fishingIcon});
                    }
                })

                },

                
            };

        var layerControl = L.control.groupedLayers(baseLayers, overlayLayers, {position:'topleft'});
        map.addControl(layerControl);

 



  }; // end of init function


});