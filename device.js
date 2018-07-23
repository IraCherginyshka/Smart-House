function Device(name) {
  this.name = name;
  this.status = 'off';

}
Device.prototype.setName = function (name) {
  this.name = name;
};
Device.prototype.on = function () {
  this.status = 'on';
};
Device.prototype.off = function () {
  this.status = 'off';
};
//Device.prototype.timer = function () {
//  this.stanus = on;
//};
