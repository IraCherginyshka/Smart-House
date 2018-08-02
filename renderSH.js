'use strict';

var myHouse = new SmartHouse('Irka', 'Харьков');

function renderHouse(h) {
  var newDiv = document.createElement('div');
  newDiv.id = 'house';
  newDiv.className = 'classDiv';

  var label1 = document.createElement('label');
  label1.id = 'owner';
  label1.innerText = 'Владелец';

  var owner = document.createElement('input');
  owner.type = 'text';
  owner.value = h.getOwner();
  owner.className = 'information';
  owner.addEventListener('input', function () {
    h.setOwner(owner.value);
  });

  var label2 = document.createElement('label');
  label2.id = 'adress';
  label2.innerText = 'Адрес';

  var adress = document.createElement('input');
  adress.type = 'text';
  adress.value = h.getAdress();
  adress.className = 'information';
  adress.addEventListener('input', function () {
    h.setAdress(adress.value);
  });

  var btn1 = document.createElement('button');
  btn1.type = 'button';
  btn1.innerText = ' + Добавить телевизор';
  btn1.className = 'addDevice';
  btn1.addEventListener('click', function () {
    myHouse.addTV(new TvSet);
  });

  var btn2 = document.createElement('button');
  btn2.type = 'button';
  btn2.innerText = ' + Добавить кондиционер';
  btn2.className = 'addDevice';
  btn2.addEventListener('click', function () {
    //renderConditioning(myHouse);
    myHouse.addAirCondition(new AirConditioning);
  });

  var btn3 = document.createElement('button');
  btn3.type = 'button';
  btn3.innerText = ' + Добавить камин';
  btn3.className = 'addDevice';
  btn3.addEventListener('click', function () {
    return renderFire()
  });

  document.body.appendChild(newDiv);
  document.getElementById('house').appendChild(label1);
  document.getElementById('owner').appendChild(owner);
  document.getElementById('house').appendChild(label2);
  document.getElementById('adress').appendChild(adress);
  document.getElementById('house').appendChild(btn1);
  document.getElementById('house').appendChild(btn2);
  document.getElementById('house').appendChild(btn3);

}

function renderFire () {
  var f = new ElectricFire();
  myHouse.addElectricFire(f);
  var number = myHouse._fire.length - 1;

  var fireDiv = document.createElement('div');
  fireDiv.id = 'fire';
  fireDiv.className = 'classD1';

  var label1 = document.createElement('label');
  label1.id = 'model';
  label1.innerText = 'Модель';

  var model = document.createElement('input');
  model.type = 'text';
  model.placeholder = 'Введите данные';
  model.value = f.getModel();
  model.className = 'information';
  model.addEventListener('input', function () {
    f.setModel(model.value);
  });

  var state = document.createElement('div');
  state.className = 'classDivSmall';
  state.innerText = f.getStatus();

  var onBtn = document.createElement("button");
  onBtn.type = "button";
  onBtn.innerHTML = "Вкл.";
  onBtn.className = "on";
  onBtn.addEventListener('click', function () {
    f.on();
    return state.innerText = f.getStatus();
  });

  var offBtn = document.createElement("button");
  offBtn.type = "button";
  offBtn.innerHTML = "Выкл.";
  offBtn.className = "off";
  offBtn.addEventListener('click', function () {
    f.off();
    return state.innerText = f.getStatus();
  });

  var p = document.createElement('p');
  p.id = 'power';
  p.innerText = 'Мощность';

  var power = document.createElement('div');
  power.innerText = f._power;
  power.className = 'classDivSmall';

  var increasePower = document.createElement('input');
  increasePower.type = 'button';
  increasePower.value = '▲';
  increasePower.className = 'button';
  increasePower.addEventListener('click', function () {
    f.increasePower();
    return power.innerText = f._power;
  });

  var decreasePower = document.createElement('input');
  decreasePower.type = 'button';
  decreasePower.value = '▼';
  decreasePower.className = 'button';
  decreasePower.addEventListener('click', function () {
    f.decreasePower();
    return power.innerText = f._power;
  });

  var deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.innerHTML = "Удалить";
  deleteBtn.className = "off";
  deleteBtn.addEventListener('click', function () {
    var i = myHouse._fire.indexOf(f);
    myHouse.deleteElectricFire(i);
    document.getElementsByClassName('classD1')[i].remove();
  });

  document.body.appendChild(fireDiv);
  document.getElementsByClassName('classD1')[number].appendChild(label1);
  document.getElementsByClassName('classD1')[number].appendChild(model);
  document.getElementsByClassName('classD1')[number].appendChild(state);
  document.getElementsByClassName('classD1')[number].appendChild(onBtn);
  document.getElementsByClassName('classD1')[number].appendChild(offBtn);
  document.getElementsByClassName('classD1')[number].appendChild(p);
  document.getElementsByClassName('classD1')[number].appendChild(power);
  document.getElementsByClassName('classD1')[number].appendChild(increasePower);
  document.getElementsByClassName('classD1')[number].appendChild(decreasePower);
  document.getElementsByClassName('classD1')[number].appendChild(deleteBtn);

}
/*

function renderConditioning(h) {
  var airDiv = document.createElement('div');
  airDiv.id = 'air'
  airDiv.className = 'classDiv';

  var model = document.createElement('div');
  model.innerHTML = "Модель: " + h._model;

  //var status = document.

  var temp = document.createElement('input');
  temp.innerHTML = "Температура: " + h._temperatura;

  var model = document.createElement('div');
  model.innerHTML = "Модель: " + h._model;

  document.body.appendChild(airDiv);
  document.getElementById('air').appendChild(temp);
  document.getElementById('air').appendChild(model);
  //document.getElementById('air').appendChild(btn2);
}



*/

renderHouse(myHouse);
