function ElectricFire(name, power) {
  Device.call(this, name);
  this._power = power;
}
ElectricFire.prototype = Object.create(Device.prototype);
ElectricFire.prototype.constructor = ElectricFire;

ElectricFire.prototype.setPowerFire = function (power) {
  if (0 < power && power < 10) {
    this._power = power;
  }
};
ElectricFire.prototype.getPowerFire = function () {
    return this._power;
};

var e = new ElectricFire('Canon', 7);

e.on();
e.setPowerFire();
console.log(e.getPowerFire());
console.log(e.status);
