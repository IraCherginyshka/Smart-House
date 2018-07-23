function SmartHouse(owner, adress) {
  this._owner = owner;
  this._adress = adress;
  this._quantityTV = [];
  this._quantityElectricFire = [];
  this._quantityConditioner = [];


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
SmartHouse.prototype.addElectricFire = function () {
  this._quantityElectricFire.push(new ElectricFire);
};
SmartHouse.prototype.addTV = function () {
  this._quantityTV.push(new TV);
};




var myHouse = new SmartHouse();
myHouse.setOwner('Ira Chergina');
myHouse.setAdress('Otakara, 11');
console.log(myHouse.getInformation());
myHouse.addElectricFire();
myHouse.addElectricFire();

console.log(myHouse._quantityElectricFire);
