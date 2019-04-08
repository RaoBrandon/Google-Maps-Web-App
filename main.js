var map

function initMap(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 12,
    center: {lat:43.6532, lng:-79.3832}
  })
}

function addMarker(){
  longitude = document.getElementById('longitude_input').value
  latitude = document.getElementById('latitude_input').value
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 12,
    center: {lat: Number(latitude), lng:Number(longitude)}
  })
  var marker = new google.maps.Marker({
    position: {lat: Number(latitude), lng: Number(longitude)},
    animation: google.maps.Animation.DROP,
    map: map
    })
  console.log(marker.position)
  console.log(marker.map)
  console.log(marker.animation)
}
