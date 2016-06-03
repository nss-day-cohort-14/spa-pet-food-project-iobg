var dogFoodRequest= new XMLHttpRequest();
dogFoodRequest.addEventListener("load", loadDogFood);
dogFoodRequest.open("GET", "dogfood.json");
dogFoodRequest.send();

function loadDogFood(){
	var dogDoc = document.getElementById("dogfoodlist");
	var dogDOM="";
	var dogFood = JSON.parse(event.target.responseText);
	
	
	dogFood.dog_brands.forEach(function(brand){
		dogDOM+="<div class='brandName'>"+brand.name;
		brand.types.forEach(function(type){
			dogDOM +="<div class ='type'>" +type.type;
			type.volumes.forEach(function(volume){
				dogDOM += "<div class='volume-name'>" + volume.name + "</div>";
				dogDOM += "<div class='price'>" + volume.price + "</div>";
			});
			dogDOM+="</div>";
		});
		dogDOM+="</div>";
		dogDoc.innerHTML =dogDOM;
	});
}
