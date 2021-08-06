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
const amount = parseInt(line);
  
  // 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

let msg = "";
// 숫자 값이 아닐 때 출력
if (isNaN(amount)) {
    msg = "유효한 값을 입력하세요."
}
// 해당 금액으로 아무 물품도 살 수 없을 때 출력
else if (!item) {
    msg = "살 수 있는 상품이 없습니다."
}
// 물품 구매가 가능할 때 출력
else {
    msg = `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.`;
}

//   const msg = amount ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : '살 수 있는 상품이 없습니다.'
  
alert(msg)
console.log(msg)
  
  
// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amount) {
// amount가 숫자 값인지, 양수인지, 오버플로우를 초래하는지 확인
    if ((0<=amount) && (amount < Number.MAX_SAFE_INTEGER)){
        const diff = [];
        for (let i = 0; i < data.length; i++) {
            // data 내 구매 가능 상품만 diff 에 추가 (비용 관점)
            if (data[i].price <= amount) {
                diff.push(data[i]);
            }
            // 구매 가능한 물품을 금액 기준 내림차순 정렬
            diff.sort((a, b) => b.price - a.price);
        }
    return diff[0];
    }
    else return null ;
}
