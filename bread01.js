const daejeonBread = [
  "튀김소보로",
  "부추빵",
  "명란바게트",
  "팡도르",
  "슈톨렌",
  "공룡알빵",
  "비스킷",
  "몽블랑",
  "소금빵",
  "크루아상",
  "바게트",
  "치아바타",
  "깜빠뉴",
  "식빵",
  "스콘"
];

let breadString1 = "";
for (let i = 0; i < daejeonBread.length; i++) {
  breadString1 += daejeonBread[i];
  if (i < daejeonBread.length - 1) {
    breadString1 += ", ";
  }
}
console.log("1. 명령형:", breadString1);

const breadString2 = daejeonBread.join(", ");
console.log("2. 선언적:", breadString2);