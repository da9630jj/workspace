function checkAllMenu(){

  const isChecked=document.querySelector('#chk_all').checked;
  const menus = document.querySelectorAll('input');

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
    const options = menu.closest('li').querySelectorAll('input');
    for(const option of options){
      option.checked = menu.checked;
    }
  }

}