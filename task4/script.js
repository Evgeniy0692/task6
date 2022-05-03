let textLink = document.querySelector ('.InputText'); 
let newText;
textLink.addEventListener('click',(event) => {
    newText=prompt('Введите желаемый текст ссылки',['?']);
    textLink.textContent=newText;
});