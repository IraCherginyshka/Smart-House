'use strict';

function ElectricFire(model) {
  Device.call(this, model);
  this._power = 0;
}
ElectricFire.prototype = Object.create(Device.prototype);
ElectricFire.prototype.constructor = ElectricFire;

ElectricFire.prototype.increasePower = function (power) {
    if (this._power < 10) {
      this._power++;
    }
};
ElectricFire.prototype.decreasePower = function (power) {
  if (this._power > 0) {
    this._power--;
  }
};
ElectricFire.prototype.getPower = function () {
    return this._power;
};
