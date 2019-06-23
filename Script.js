
var r, i;
var byer = [{
      by: "Roskilde"
    }, {
      by: "Kastrup/Dragør"
    }, {
      by: "Byen"
    }, {
      by: "Albertslund/Taastrup"
    }, {
      by: "Amager"
    }, {
      by: "Birkerød/Allerød"
    }, {
      by: "Brøndby/Ishøj"
    }, {
      by: "Byen Nord 1"
    }, {
      by: "Byen Syd"
    }, {
      by: "Frederiksberg"
    },{
      by: "Greve"
    },{
      by: "Hellerup/Gentofte"
    },{
      by: "Herlev/Bagsværd"
    },{
      by: "Holte/Virum"
    },{
      by: "Kokkedal/Nivå"
    },{
      by: "Køge"
    },{
      by: "Lyngby"
    },{
      by: "Rødovre/Hvidovre"
    },{
      by: "Søborg"
    },{
      by: "Værløse/farum"
    },{
      by: "Ølstykke/Smørum"
    },{
      by: "Østerbro/Nørrebro"
    }];
var byLen = byer.length;

var ruter = document.getElementById("routes");
var drivers = document.getElementById("chauffør")
var byAntal = -1;

var addDrivers = function() {

}

//Adds the new route, when the button is clicked

 var tilføj = function(){
 	
 	var list = document.getElementById("list");
  
 	for (i = 0;  i < byLen; i++) {
 		if (i = byer.indexOf(i)) {
    var node = document.createElement("LI");               
    var textnode = document.createTextNode(byer[i].by);       
    node.appendChild(textnode);   
    list.appendChild(node);
    return true;
    }
    return false;
 };

};

//click event, adds the routes, when button is clicked
document.getElementById("addRoute").addEventListener("click", tilføj);

document.getElementById("removeRoute").addEventListener("click", function(){
  
 list.removeChild(list.lastChild); 
});


document.getElementById("removeAllRoutes").addEventListener("click", function(){

list.removeChild(list.allChilds);  

});


