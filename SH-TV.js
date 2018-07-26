function TvSet (name) {
  Device.call(this, name);
  this._channel = 0;
  this._volume = 0;
}

TvSet.prototype = Object.create(Device.prototype);
TvSet.prototype.constructor = TvSet;

TvSet.prototype.setTvChannel = function (value) {
  if (0 <= value && value <= 100) {
    this._channel = value;
  }
};
TvSet.prototype.getTvChannel = function () {
  return this._channel;
};
TvSet.prototype.setVolume = function (value) {
  if (0 <= value && value <= 100) {
    this._volume = value;
  }
};
TvSet.prototype.getVolume = function () {
  return this._volume;
};
