
function setAvgAge(){
  
  const ageTd= document.querySelectorAll('.ageTd');

  let sum=0;

  ageTd.forEach((total, i)=>{
    sum+=Number(total.textContent);
  });

  let average = sum/ageTd.length;


  const resultTd=document.querySelector('#resultTd');
  resultTd.innerHTML='';
  resultTd.insertAdjacentHTML('beforeend', average);

}