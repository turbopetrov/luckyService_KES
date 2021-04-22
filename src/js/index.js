import $ from 'jquery';
const welcomeBtn = $('.js-welcomeBtn');
const googleBtn = $('.js-getAppBtn[data-type="google"]');
const appleBtn = $('.js-getAppBtn[data-type="apple"]');
const androidBtn = $('.js-getAppBtn[data-type="android"]');

function clickBtn(btn){
  btn.on('mousedown', ()=>{
    btn.toggleClass('pressed')
  });
  btn.on('mouseup', ()=>{
    btn.toggleClass('pressed')
  });
}
clickBtn(welcomeBtn);
clickBtn(appleBtn);
clickBtn(googleBtn);
clickBtn(androidBtn);

