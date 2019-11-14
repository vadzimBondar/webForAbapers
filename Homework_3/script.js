function Plant(name, discription, plantClass, application,
               growthPlace, discoverer) {
    this.name = name;
    this.discoverer = discoverer;
    this.plantClass = plantClass;
    this.growthPlace = growthPlace;
    this.application = application;
    this.discription = discription;

    this.getName = function() {
        return this.name;
    }

    this.getDiscoverer = function() {
        return this.discoverer;
    }

    this.getPlantClass = function() {
        return this.plantClass;
    }

    this.getGrowthPlace = function() {
        return this.growthPlace;
    }

    this.getApplication = function() {
        return this.application;
    }

    this.getDiscription = function() {
        return this.discription;
    }
}

function Fern() {
    Plant.call(this);

    this.sheetShape = sheetShape;
    this.gametoType = gametoType;

    this.getSheetShape = function() {
        return this.sheetShape;
    }

    this.getGametoType = function() {
        return this.gametoType;
    }
}

function Spruce() {
    Plant.call(this);

    this.needleColor = needleColor;
    this.trunkThickness = trunkThickness;

    this.getNeedleColor = function() {
        return this.needleColor;
    }

    this.getTrunkThickness = function() {
        return this.trunkThickness;
    }
}