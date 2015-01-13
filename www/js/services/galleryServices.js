angular.module('galleryServices', [])

.factory('PhotoAlbum', function() {

 var PhotoAlbum = {
    photos: [
        { link: "img/ionic.png", id: 1 },
        { link: "img/ionic.png", id: 2 },
        { link: "img/ionic.png", id: 3 },
    ]
  };

 return PhotoAlbum;
});
