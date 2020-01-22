"use strict";

function User(id, username, mail) {
    this.id = id;
    this.username = username;
    this.mail = mail;
};

User.prototype.setId = function (value) {
    this._id = value;
};
User.prototype.getId = function () {
    return this._id;
};

User.prototype.setUsername = function (value) {
    this._username = value;
};
User.prototype.getUsername = function () {
    return this._username;
};

User.prototype.setMail = function (value) {
    this._mail = value;
};
User.prototype.getMail = function () {
    return this._mail;
};

module.exports = User;
//# sourceMappingURL=User.js.map
