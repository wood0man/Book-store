function getLocation(){
    navigator.geolocation.getCurrentPosition(onSuccess);
    function onSuccess(position){
        document.getElementById("location").textContent= "Latitude: " +position.coords.latitude+" Longitude: "+ position.coords.longitude;
    }
}
getLocation();