function Device(name) {
  this._name = name;
  this._status = false;

}

Device.prototype.setName = function (name) {
  this._name = name;
};
Device.prototype.on = function () {
  this._status = true;
};
Device.prototype.off = function () {
  this._status = false;
};
