// 상품 데이터
const data = [
  { name: "초콜렛", price: 2000 },
  { name: "아이스크림", price: 1000 },
  { name: "컵라면", price: 1600 },
  { name: "볼펜", price: 2500 },
  { name: "아메리카노", price: 4000 },
  { name: "과자", price: 3000 },
  { name: "탄산수", price: 1200 },
  { name: "떡볶이", price: 3500 },
  { name: "노트", price: 1500 },
  { name: "껌", price: 500 }
];

// 사용자 입력 받기
const line = prompt("최대 금액을 입력해주세요.");
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);


const msg = !isNaN(amount)? 
// 입력값이 숫자일 경우 아래 구문 실행
(item ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : "살 수 있는 상품이 없습니다.")
// 숫자가 아닌 올바르지 않은 값일 경우 null 출력
: null
  
alert(msg)

// 아래에 getItemByAmount 함수를 작성하세요.x
function getItemByAmount(data, amount) {

  // 구매 가능한 상품과 가격 목록을 담을 수 있수 있는 객체 생성
  const diff = [];

  for (let i = 0; i < data.length - 1; i++) {
    // data 내 구매 가능 상품만 diff에 추가 (비용 관점)
    if (data[i].price <= amount) {
      diff.push(data[i]);
    }
    // 구매 가능한 물품을 금액 기준 내림차순 정렬
    diff.sort((a, b) => b.price - a.price);
  }
  return diff[0];
}
