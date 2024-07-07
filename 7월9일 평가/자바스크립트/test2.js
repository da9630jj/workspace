
function setAvgAge(){
  const ageTd= document.querySelectorAll('.ageTd');
  let sum=0;
  let people=ageTd.length;
  ageTd.forEach((total)=>{
    sum+=Number(total.textContent);
  });
  console.log(sum);
  let average = sum/people;
  const resultTd=document.querySelector('#resultTd');
  resultTd.innerHTML='';
  resultTd.insertAdjacentHTML('beforeend', average);

}