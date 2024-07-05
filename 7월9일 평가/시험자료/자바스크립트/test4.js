function checkAllMenu(){
  const chkAll=document.querySelector('#chk_all');
  const menus = document.querySelectorAll('.menu');

  const isChecked = chkAll.checked;
  if(isChecked){
    for(const menu of menus){
      menu.checked=true;
    }
  }
}

function checkAllOption(){
  const menu = document.querySelector('.menu');
  const ckBoxs = document.querySelector('.menu');menu.closest('li>input')

  const isChecked = menu.checked;
  if(isChecked){
    for(const ckBox of ckBoxs){
      ckBox.checked=true;
    }
  }
}