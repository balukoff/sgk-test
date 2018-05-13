
Vue.component('modal', {
  template: '#modal'
})


var app = new Vue({
  el: '#app',
  data: {
    // lang
	header:           'Тестовое задание для СГК(vue.js):', 
	placeholder:      'Введите ФИО',
	error:            'Неправильный формат ввода',
	fheader:          'Фамилия:',
	iheader:          'Имя:',
	oheader:          'Отчество:',
	send:             'Отправить',
	hello:            'Спасибо',
	// flags
	isHiddenError:    true, 
	isHiddenPrePopup: true, 
	ispopupHidden:    true,
	showModal:        false,
	// beginner values state
	ivalue: '',
	fvalue: '',
	ovalue: '',
	full: ''
  }
});

 function showForm(){
   //app.isbackHidden = false;
   //app.ispopupHidden = false;
   //app.showModal = true;
 }
document.addEventListener('DOMContentLoaded', function(){
 
 //document.getElementById('popup').onclick = showForm;
 document.getElementById('main-input').onkeyup = function(e) {
  if(this.value.trim() == '') return;
  var regular = /^[А-Я][а-яА-Я\-]{3,}\s[А-Я][а-яА-Я\-]{3,}\s[А-Я][а-яА-Я\-]{3,}?$/
  app.isHidden = app.isHiddenPrePopup = true;
  if(!regular.test(this.value)){ 
    app.isHiddenError = false;
	app.full = '';
  }
  else{
   app.isHiddenError = true;
   app.isHiddenPrePopup = false;
   var fio = this.value.trim().split(' ');
   app.fvalue = fio[0];
   app.ivalue = fio[1];
   app.ovalue = fio[2];
   app.full = this.value.trim();
  }
 }

});
