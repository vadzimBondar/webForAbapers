"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Worker = function () {
    function Worker(id, name, mail, company) {
        _classCallCheck(this, Worker);

        this.id = id;
        this.name = name;
        this.mail = mail;
        this.company = company;
    }

    _createClass(Worker, [{
        key: "id",
        set: function set(value) {
            this._id = value;
        },
        get: function get() {
            return this._id;
        }
    }, {
        key: "name",
        set: function set(value) {
            this._name = value;
        },
        get: function get() {
            return this._name;
        }
    }, {
        key: "mail",
        set: function set(value) {
            this._mail = value;
        },
        get: function get() {
            return this._mail;
        }
    }, {
        key: "company",
        set: function set(value) {
            this._company = value;
        },
        get: function get() {
            return this._company;
        }
    }]);

    return Worker;
}();

module.exports = Worker;
//# sourceMappingURL=Worker.js.map
