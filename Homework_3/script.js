function Plant(name, discription, plantClass, application,
               growthPlace, discoverer) {
    this.name = name;
    this.discription = discription;
    this.plantClass = plantClass;
    this.application = application;
    this.growthPlace = growthPlace;
    this.discoverer = discoverer;

    this.getName = function() {
        return this.name;
    }

    this.getDiscription = function() {
        return this.discription;
    }

    this.getPlantClass = function() {
        return this.plantClass;
    }

    this.getApplication = function() {
        return this.application;
    }

    this.getGrowthPlace = function() {
        return this.growthPlace;
    }

    this.getDiscoverer = function() {
        return this.discoverer;
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