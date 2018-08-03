'use strict';

function TvSet (model) {
  Device.call(this, model);
  this._channel = 0;
  this._volume = 0;
}

TvSet.prototype = Object.create(Device.prototype);
TvSet.prototype.constructor = TvSet;

TvSet.prototype.setChannel = function () {
  var newChannel = +prompt('Введите номер канала', '');
  if (0 <= newChannel && newChannel <= 100) {
    this._channel = newChannel;
  } else {
    alert('Номер канала должен быть в диапазоне от 1 до 100');
  }
};

TvSet.prototype.upChannel = function () {
  if (this._channel < 100 ) {
    this._channel++;
  }
};
TvSet.prototype.downChannel = function () {
  if (this._channel > 0) {
    this._channel--;
  }
};

TvSet.prototype.getChannel = function () {
  return this._channel;
};
TvSet.prototype.upVolume = function () {
  if (this._volume < 10 ) {
    this._volume++;
  }
};
TvSet.prototype.downVolume = function () {
  if (this._volume > 0) {
    this._volume--;
  }
};
TvSet.prototype.getVolume = function () {
  return this._volume;
};
