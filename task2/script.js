let searchConsLog = document.querySelector('#consoleLog');
searchConsLog.onclick = function() {
    alert('Это метод для вывода сообщения в консоль веб-браузера')};

let seachAlert = document.querySelector('#alert')
seachAlert.addEventListener('click',(event) => alert('Функция alert() предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК».'));

let searchPrompt = document.querySelector('#prompt')
searchPrompt=addEventListener('click',(event)=>alert('Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена».'));