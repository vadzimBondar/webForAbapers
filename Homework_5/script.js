class Plant {
    constructor(name, discription, plantClass, application,
        growthPlace, discoverer) {

        this.name = name;
        this.discoverer = discoverer;
        this.plantClass = plantClass;
        this.growthPlace = growthPlace;
        this.application = application;
        this.discription = discription;
    }

    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }

    setDiscoverer(value) {
        this.discoverer = value;
    }
    getDiscoverer() {
        return this.discoverer;
    }

    setPlantClass(value) {
        this.plantClass = value;
    }
    getPlantClass() {
        return this.plantClass;
    }

    setGrowthPlace(value) {
        this.growthPlace = value;
    }
    getGrowthPlace() {
        return this.growthPlace;
    }

    setApplication(value) {
        this.application = value;
    }
    getApplication() {
        return this.application;
    }

    setDiscription(value) {
        this.discription = value;
    }
    getDiscription() {
        return this.discription;
    }
}

class Fern extends Plant {
    constructor(name, discription, plantClass, application,
        growthPlace, discoverer, sheetShape, gametoType) {

        super(name, discription, plantClass, application, growthPlace, discoverer);

        this.sheetShape = sheetShape;
        this.gametoType = gametoType;
    }

    setSheetShape(value) {
        this.sheetShape = value;
    }
    getSheetShape() {
        return this.sheetShape;
    }

    setGametoType(value) {
        this.gametoType = value;
    }
    getGametoType() {
        return this.gametoType;
    }
}

class Spruce extends Plant {
    constructor(name, discription, plantClass, application,
        growthPlace, discoverer, needleColor, trunkThickness) {

        super(name, discription, plantClass, application, growthPlace, discoverer);

        this.needleColor = needleColor;
        this.trunkThickness = trunkThickness;
    }

    setNeedleColor(value) {
        this.needleColor = value;
    }
    getNeedleColor() {
        return this.needleColor;
    }

    setTrunkThickness(value) {
        this.trunkThickness = value;
    }
    getTrunkThickness() {
        return this.trunkThickness;
    }
}