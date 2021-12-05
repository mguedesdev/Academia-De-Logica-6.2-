const checkin = document.querySelector('.inputCheckin');  
const checkout = document.querySelector('.inputCheckout'); 
const bedroom = document.querySelectorAll('.bedroom'); 
const select = document.querySelector('.nPessoas'); 
const textArea = document.querySelector('.obs'); 
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto(){
  for (let i = 0; i <bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas(){
  return select.options[select.selectedIndex].value;
}

function getData(value){
  data = new Date(value)
  dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
  return dataFormatada;
}
