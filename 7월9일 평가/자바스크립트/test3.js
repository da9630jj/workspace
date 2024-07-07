function setTable(){
  const row=document.querySelector('#rowInput').value;

  const col=document.querySelector('#colInput').value;

  const tableDiv = document.querySelector('.table-div')
  tableDiv.innerHTML='';
  
  let table = '<table>';

  for(let i = 0; i<row; i++){
    table+='<tr>'
      for(let c=0; c<col; c++){
        table+=`<td>${i+1}행 ${c+1}열 </td>`
    }
    table+='</tr>'
  }
  table+='</table>';
  console.log(table);

  
  tableDiv.insertAdjacentHTML('beforeend', table);
}
