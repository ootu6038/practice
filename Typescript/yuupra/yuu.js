"use strict";
var TowerAddress = /** @class */ (function () {
    function TowerAddress() {
    }
    return TowerAddress;
}());
var Address = /** @class */ (function () {
    function Address(_zip) {
        this._zip = _zip;
        this.addresses =
            {
                '070-1100': {
                    'prefecture': '北海道',
                    'city': '赤平市'
                },
                '038-0000': {
                    'prefecture': '青森県',
                    'city': '青森市'
                }
            };
    }
    Object.defineProperty(Address.prototype, "zip", {
        get: function () {
            return this._zip;
        },
        set: function (value) {
            this._zip = value;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.getAddress = function () {
        var here = this.addresses[this.zip];
        return "".concat(here.prefecture, " ").concat(here.city);
    };
    return Address;
}());
var myaddress = new Address('079-1100');
//myaddress.zip = '111-1111';
console.log(myaddress.zip);
console.log(myaddress.getAddress());
console.log(myaddress.addresses);
