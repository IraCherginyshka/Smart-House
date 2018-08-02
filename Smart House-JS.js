function SmartHouse(owner, adress) {
  this._owner = owner;
  this._adress = adress;
  this._tv = [];
  this._fire = [];
  this._air = [];

}

SmartHouse.prototype.setOwner = function (owner) {
  this._owner = owner;
};
SmartHouse.prototype.setAdress = function (adress) {
  this._adress = adress;
};
SmartHouse.prototype.getOwner = function (owner) {
  return this._owner;
};
SmartHouse.prototype.getAdress = function (adress) {
  return this._adress;
};
SmartHouse.prototype.addTV = function (device) {
  this._tv.push(device);
};
SmartHouse.prototype.deleteTV = function (x) {
  this._tv.splice(x, 1);
  return this._tv;
};
SmartHouse.prototype.addElectricFire = function (device) {
  this._fire.push(device);
};
SmartHouse.prototype.deleteElectricFire = function (x) {
  this._fire.splice(x, 1);
  return this._fire;
};
SmartHouse.prototype.addAirCondition = function (device) {
  this._air.push(device);
};
SmartHouse.prototype.deleteAirCondition = function (x) {
  this._air.splice(x, 1);
  return this._air;
};
SmartHouse.prototype.getTV = function () {
  return this._tv;
};
SmartHouse.prototype.getElectricFire = function () {
  return this._fire;
};
SmartHouse.prototype.getAirCondition = function () {
  return this._air;
};
