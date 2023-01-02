window.onload = function() {
	var map;

	function initialize(){
		var mapProp = {
			center:  new google.maps.LatLng(-27.648598,-48.577423),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarket(lat,long,icon,content){
		var latLng = {'lat': lat,'lng':long};

		var market = new google.maps.Marker({
			position:latLng,
			map: map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

	
			infoWindow.open(map,market);
		
	}

	initialize();
	var conteudo = "<p style='color:black;'>Meu endereço</p>";
	addMarket(-27.616637,-48.5923228,'',conteudo);
}