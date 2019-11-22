function Plant(name, discription, plantClass, application,
               growthPlace, discoverer) {
    this.name = name;
    this.discoverer = discoverer;
    this.plantClass = plantClass;
    this.growthPlace = growthPlace;
    this.application = application;
    this.discription = discription;
}

Plant.prototype.setName = function(value){
    this.name = value;
}
Plant.prototype.getName = function() {
    return this.name;
}

Plant.prototype.setDiscoverer = function(value) {
    this.discoverer = value;
}
Plant.prototype.getDiscoverer = function() {
    return this.discoverer;
}

Plant.prototype.setPlantClass = function(value) {
    this.plantClass = value;
}
Plant.prototype.getPlantClass = function() {
    return this.plantClass;
}

Plant.prototype.setGrowthPlace = function(value) {
    this.growthPlace = value;
}
Plant.prototype.getGrowthPlace = function() {
    return this.growthPlace;
}

Plant.prototype.setApplication = function(value) {
    this.application = value;
}
Plant.prototype.getApplication = function() {
    return this.application;
}

Plant.prototype.setDiscription = function(value) {
    this.discription = value;
}
Plant.prototype.getDiscription = function() {
    return this.discription;
}

function Fern(name, discription, plantClass, application,
    growthPlace, discoverer, sheetShape, gametoType) {

    Plant.call(this, name, discription, plantClass, application,
        growthPlace, discoverer);

    this.sheetShape = sheetShape;
    this.gametoType = gametoType;
}

Fern.prototype = Object.create(Plant.prototype);
Fern.prototype.constructor = Fern;

Fern.prototype.setSheetShape = function(value) {
    this.sheetShape = value;
}
Fern.prototype.getSheetShape = function() {
    return this.sheetShape;
}

Fern.prototype.setGametoType = function(value) {
    this.gametoType = value;
}
Fern.prototype.getGametoType = function() {
    return this.gametoType;
}

function Spruce(name, discription, plantClass, application,
    growthPlace, discoverer, needleColor, trunkThickness) {

    Plant.call(this, name, discription, plantClass, application,
        growthPlace, discoverer);

    this.needleColor = needleColor;
    this.trunkThickness = trunkThickness;
}

Spruce.prototype = Object.create(Plant.prototype);
Spruce.prototype.constructor = Spruce;

Spruce.prototype.setNeedleColor = function(value) {
    this.needleColor = value;
}
Spruce.prototype.getNeedleColor = function() {
    return this.needleColor;
}

Spruce.prototype.setTrunkThickness = function(value) {
    this.trunkThickness = value;
}
Spruce.prototype.getTrunkThickness = function() {
    return this.trunkThickness;
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }