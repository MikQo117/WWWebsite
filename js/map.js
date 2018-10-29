function getLocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
		return true;
	}
	else
	{
		return false;
	}
}

function showPosition(position)
{
    var mapOptions = {
		
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
	var map = new google.maps.Map(document.getElementById("theMap"), mapOptions);
	return true;
}