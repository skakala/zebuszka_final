document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('#map').length > 0)
    {
      if (document.querySelector('html').lang)
        lang = document.querySelector('html').lang;
      else
        lang = 'en';
  
      var js_file = document.createElement('script');
      js_file.type = 'text/javascript';
      js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyAMj0arAPLo-AyoDzP7aT88BrnFNdW2wr8&language=' + lang;
      document.getElementsByTagName('head')[0].appendChild(js_file);
    }
  });

  function initMap() {
    // The location of Zebuszka
      var zebuszkaLoc = {lat: 50.07845, lng: 19.90430};
  
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: zebuszkaLoc});
  
  
  var icon = {
      url: "images/Zmarker.svg", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(25, 50) // anchor
  };
  
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="firstHeading" class="firstHeading">'+
      ' <img src="/images/LOGO.svg" style="height:30px; width:auto; border:none"> </div>' +
      '<div id="bodyContent">'+
      '<p><b>Stomatologia dla Dzieci i Młodzieży</b></p>' +
      '<p>ul. Zaczarowane Koło 5A, <br> 30-087 Kraków</p>'+
      '<p>tel.: <a href="tel:+48570048066">570 048 066</a> <br>'+
      'email: <a href="mailto:gabinet@zebuszka.pl">gabinet@zebuszka.pl</a></p>'+
      '<p><a  target="_blank" rel="noopener noreferrer"  href="https://www.google.com/maps/place/Z%C4%98BUSZKA+STOMATOLOGIA+DLA+DZIECI+I+M%C5%81ODZIE%C5%BBY/@50.07849,19.904032,16z/data=!4m5!3m4!1s0x0:0x3418db7133337fde!8m2!3d50.0784899!4d19.904032?hl=en-US"</a> '+
      'Otwórz na dużej mapie</p>'+
      '</div>'+
      '</div>';
    
      
      var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 210
    });
  
  
  var marker = new google.maps.Marker(
        {
            position: zebuszkaLoc,
             map: map
             ,icon: icon
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      marker.addListener('click', toggleBounce);
      marker.addListener('click', function() {infowindow.open(map, marker);})
      
      function toggleBounce() {
      if (marker.getAnimation() !== null) {marker.setAnimation(null);} 
          // else {    marker.setAnimation(google.maps.Animation.BOUNCE); }
      }
  
  // infowindow.open(map, marker);
  }






//   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMj0arAPLo-AyoDzP7aT88BrnFNdW2wr8&callback=initMap"></script> -->
