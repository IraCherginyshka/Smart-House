function SmartHouse(owner, adress) {
  this._owner = owner;
  this._adress = adress;
  this._quantityTV = [];
  this._quantityElectricFire = [];
  this._quantityAirCondition = [];
}

SmartHouse.prototype.setOwner = function (owner) {
  this._owner = owner;
};
SmartHouse.prototype.setAdress = function (adress) {
  this._adress = adress;
};
SmartHouse.prototype.getInformation = function () {
  return "Владелец: " + this._owner + "; " + " Адрес: " + this._adress + ".";
};
SmartHouse.prototype.addElectricFire = function (device) {
  this._quantityElectricFire.push(device);
};
SmartHouse.prototype.addTV = function (device) {
  this._quantityTV.push(device);
};
SmartHouse.prototype.addAirCondition = function (device) {
  this._quantityAirCondition.push(device);
};
SmartHouse.prototype.getElectricFire = function () {
  return this._quantityElectricFire;
};
SmartHouse.prototype.getTV = function () {
  return this._quantityTV;
};
SmartHouse.prototype.getAirCondition = function () {
  return this._quantityAirCondition;
};



var myHouse = new SmartHouse();
myHouse.setOwner('Ira Chergina');
myHouse.setAdress('Otakara, 11');
console.log(myHouse.getInformation());
myHouse.addElectricFire(e);

console.log(myHouse._quantityElectricFire);
