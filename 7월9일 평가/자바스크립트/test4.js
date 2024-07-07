function checkAllMenu(){
  const chkAll=document.querySelector('#chk_all');
  const menus = document.querySelectorAll('input');

  const isChecked = chkAll.checked;
  if(isChecked){
    for(const menu of menus){
      menu.checked=true;
    }
  }
  else{
    for(const menu of menus){
      menu.checked= false;
    }
  }
    
}

function checkAllOption(){
  const menus = document.querySelectorAll('.menu');
  for(const menu of menus){
    const options = menu.closest('li').querySelectorAll('ul li input')
    for(const option of options){
      option.checked = menu.checked;
    }
  }
}