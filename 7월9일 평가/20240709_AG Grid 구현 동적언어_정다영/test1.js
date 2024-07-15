//item_list는 현재 쇼핑몰에서 판매하고 있는 상품들의 목록 정보이다.
//아래 데이터를 참고하여 요구사항을 해결하시오.
const item_list = [
  {
    item_name : '여름 셔츠',
    price : 25000,
    brand : 'java마켓',
    size : [90, 100, 110]
  },
  {
    item_name : '라운드 티',
    price : 20000,
    brand : 'java마켓',
    size : [90, 95, 100, 105, 110]
  },
  {
    item_name : '데님 청바지',
    price : 30000,
    brand : 'python마켓',
    size : [90, 100, 110, 120]
  },
  {
    item_name : '슬림 면바지',
    price : 35000,
    brand : 'python마켓',
    size : [90, 95, 100]
  }
];

//1. 'java마켓'에서 팔고 있는 상품들의 상품명과 가격을 각각 콘솔창에 출력하여라.
for(let i = 0; i<item_list.length; i++){
  if(item_list[i].brand=='java마켓'){
    console.log(`${item_list[i].item_name}/${item_list[i].price}`);
  }
}
// for(const item of item_list){
//   if(item.brand=='')
//   console.log()
// }

//2. 95사이즈를 구매할 수 있는 상품들의 상품명을 콘솔창에 출력하시오.
item_list.forEach((item, i)=>{
  item.size.forEach((size, j)=>{
    if(size==95){
      console.log(item.item_name)
    }
  })
})

//3. '등록 및 출력' 버튼을 클릭하면 입력 내용 저장 후 콘솔창에 데이터를 출력하시오.
function addItem(){
  // 버튼을 클릭하면 input태그에 입력한 내용은 test1.js에서 선언한 item_list에 저장
  const add_data={
    itemName:document.querySelector('#itemName').value,
    price:document.querySelector('#price').value,
    brand:document.querySelector('#brand').value,
    size:sizeArr
  }

  const chks= document.querySelectorAll('.size:checked')
  const sizeArr=[];
  chks.forEach((chk, i)=>{
    sizeArr.push(chk.value);
  })
  

  if(itemName==''){
    alert('상품명을 입력하세요');
    return false;
  }


  console.log(item_list);

}
