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

    set Name(value) {
        this.name = value;
    }
    get Name() {
        return this.name;
    }

    set setDiscoverer(value) {
        this.discoverer = value;
    }
    get getDiscoverer() {
        return this.discoverer;
    }

    set setPlantClass(value) {
        this.plantClass = value;
    }
    get getPlantClass() {
        return this.plantClass;
    }

    set setGrowthPlace(value) {
        this.growthPlace = value;
    }
    get getGrowthPlace() {
        return this.growthPlace;
    }

    set setApplication(value) {
        this.application = value;
    }
    get getApplication() {
        return this.application;
    }

    set setDiscription(value) {
        this.discription = value;
    }
    get getDiscription() {
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

    set setSheetShape(value) {
        this.sheetShape = value;
    }
    get getSheetShape() {
        return this.sheetShape;
    }

    set setGametoType(value) {
        this.gametoType = value;
    }
    get getGametoType() {
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

    set setNeedleColor(value) {
        this.needleColor = value;
    }
    get getNeedleColor() {
        return this.needleColor;
    }

    set setTrunkThickness(value) {
        this.trunkThickness = value;
    }
    get getTrunkThickness() {
        return this.trunkThickness;
    }
}