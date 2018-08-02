function Device(model) {
  this._model = model;
  this._status = false;

}

Device.prototype.setModel = function (model) {
    this._model = model;
};
Device.prototype.getModel = function () {
  if (this._model ===  undefined) {
    return '';
  }
};
Device.prototype.on = function () {
  this._status = true;
};
Device.prototype.off = function () {
  this._status = false;
};
Device.prototype.getStatus = function () {
  if (this._status === true) {
    return 'Вкл';
  } else {
    return 'Выкл';
  }
};
