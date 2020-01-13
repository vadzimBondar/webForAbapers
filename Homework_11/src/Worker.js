"use strict"

class Worker {
    constructor(id, name, mail, company) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.company = company;
    }

    set id(value) {
        this._id = value;
    };
    get id() {
        return this._id;
    };

    set name(value) {
        this._name = value;
    };
    get name() {
        return this._name;
    };

    set mail(value) {
        this._mail = value;
    };
    get mail() {
        return this._mail;
    };

    set company(value) {
        this._company = value;
    };
    get company() {
        return this._company;
    };
}

module.exports = Worker;