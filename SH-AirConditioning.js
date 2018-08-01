'use strict';

function AirConditioning (model) {
  Device.call(this, model);
  this._typeOfOperation = "";
  this._temperatura = 18;
  this._lock = false; //блоктровка пульта от детей
}

AirConditioning.prototype = Object.create(Device.prototype);
AirConditioning.prototype.constructor = AirConditioning;

AirConditioning.prototype.setTypeOfOperation = function (mode) {
  this._typeOfOperation = ['Обогрев','Охлаждение', 'Вентиляция'];
}; // доработать !!!!!!!!!!!!!!
AirConditioning.prototype.getTypeOfOperation = function () {
  return this._typeOfOperation;
};
AirConditioning.prototype.setTemperatura = function (temp) {
  if (18 <= temp && temp <= 30) {
    this._temperatura = temp;
  }
};
AirConditioning.prototype.getTemperatura = function (temp) {
  return this._temperatura;
};
AirConditioning.prototype.unLock = function () {
  this._lock = true;
};
AirConditioning.prototype.setLock = function () {
  this._lock = false;
};
AirConditioning.prototype.getLock = function () {
  return this._lock;
};







/*
cool (переводится «охлаждение») – обозначено снежинкой;
heat (для обогрева) со значком солнышка;
режим dry (режим осушения в любом кондиционере) c изображением капли;
fan (вентиляция) со значком вентилятора;
sleep (ночной режим) c обозначением звездочки;
timer с изображением часов;
swing – значение заключается в изменении направления шторок;
lock – блокировка пульта от детей;
led – подсветка пульта для работы с ним вечером и ночью.
*/
