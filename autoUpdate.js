window.addEventListener('DOMContentLoaded', function(){
  const todayElm = document.querySelectorAll('.js-todayElm');
  const nextElm = document.querySelectorAll('.js-nextElm');
  const disElm = document.querySelectorAll('.js-disElm');

  const upToday = new Date();
  const upNext = new Date();
  const updis = new Date();

  let todaytElmConfig = '';
  for (let i = 0; i < todayElm.length; i++) {
    todaytElmConfig = todayElm[i].dataset.config;
    if (todaytElmConfig == undefined) {
      todaytElmConfig = 0;
    };
  }

  let nextElmConfig = '';
  for (let i = 0; i < nextElm.length; i++) {
    nextElmConfig = nextElm[i].dataset.config;
    if (nextElmConfig == undefined) {
      nextElmConfig = 0;
    };
  }

  let disElmConfig = '';
  for (let i = 0; i < disElm.length; i++) {
    disElmConfig = disElm[i].dataset.config;
    if (disElmConfig == undefined) {
      disElmConfig = 0;
    };
  }

  upToday.setDate(upToday.getDate() - ( - todaytElmConfig))
  upNext.setDate(upToday.getDate() + 14 - ( - nextElmConfig))
  updis.setDate(upToday.getDate() + 14 - ( - disElmConfig))

  const todayM = upToday.getMonth()+1;
  const nextM = upNext.getMonth()+1;
  const disM = updis.getMonth()+1;

  for (let i = 0; i < todayElm.length; i++) {
    todayElm[i].innerHTML = upToday.getFullYear()+"年"+todayM+"月"+upToday.getDate()+"日";
  }
  for (let i = 0; i < nextElm.length; i++) {
    nextElm[i].innerHTML = upNext.getFullYear()+"年"+nextM+"月"+upNext.getDate()+"日";
  }
  for (let i = 0; i < disElm.length; i++) {
    disElm[i].innerHTML = updis.getFullYear()+"年"+disM+"月"+updis.getDate()+"日";
  }
});