window.addEventListener('DOMContentLoaded', function(){
  const todayElm = document.querySelectorAll('.js-todayElm');
  const nextElm = document.querySelectorAll('.js-nextElm');
  const upToday = new Date();
  const upNext = new Date();
  upNext.setDate(upToday.getDate() + 14)

  const todayM = upToday.getMonth()+1;
  const nextM = upNext.getMonth()+1;
  for (let i = 0; i < todayElm.length; i++) {
    todayElm[i].innerHTML = upToday.getFullYear()+"年"+todayM+"月"+upToday.getDate()+"日";
  }
  for (let i = 0; i < nextElm.length; i++) {
    nextElm[i].innerHTML = upNext.getFullYear()+"年"+nextM+"月"+upNext.getDate()+"日";
  }
});