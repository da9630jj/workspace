function setTable(){
  const inputRowTag=document.querySelector('#rowInput');

  const inputColTag=document.querySelector('#colInput');

  const num1 = inputRowTag.value;
  const num2 = inputColTag.value;
  
  let str = '';
  for(let i = 0; i<num2; i++){
    str+=`<div style type="text/css">${num1*num2}<div>`;
  }

  const result_div = document.querySelector('#table-div');
  result_div.innerHTML='';
  result_div.insertAdjacentHTML('beforeend', str)
}