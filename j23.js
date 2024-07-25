
// // 데이터 타입
// // 숫자
// let num1 = 10;
// //console.log(num1);
// //console.log(typeof num1);


// // 문자
// let str = "Hello, World!";
// // console.log(str);
// // console.log(typeof str);

// // console.log(str.length);
// let str1="Hello,";
// let str2="world!";
// let result = str1.concat(str2);
// // console.log(result);

// //문자열 대체
// let str3 = "Hello, world!";
// let result01 = str3.replace("world", "Javascript");
// // console.log(result01);

// let str4 = "apple, banana, kiwi";
// let result02 = str4.split(",");
// // console.log(result02);


// //불리언(참거짓)
// let bool1 = true;
// let bool2 = false;

// // console.log(bool1);
// // console.log(typeof bool1);
// // console.log(bool2);

// //undefined는 값이 할당 되지 않은 변수(벽만 있음), null은 값이 존재하지않음.(휴지걸이는 있음)
// // let x;
// // console.log(x);

// // 객체(object) 항상, key : value pair 생각하기
// let person = {
//     name: "park",
//     age: 30,
//     isMarried: true
// }
// // console.log(typeof person);

// 명시적 형변환
// let result5 = string(123);
// console.log(typeof result5);

// let result10 = Number("123");
// console.log(result10);
// console.log(typeof result10);

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("false"));

// console.log(8%3);
// console.log(5%2);

//할당 연산자
// let x = 10;

// //더하기 등호 연산자
// x +=5;
// console.log(x);

// x -=0;
// console.log(x);

// //곱하기 등호 연산자
// let a = 10;
// a *= 2;
// console.log(a);

//논리연산자 중요!!!
// // 논리곱 연산자 : 모두 true 일때만 true변환
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // 논리합 연산자 : 두 값중 하나라도 true인 경우 true, 많이 쓰임!
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//논리 부정 연산자 : 값을 반대로 바꿈

// console.log(!true);
// let a = true;
// console.log(!a);

//삼항 연산자(중요!!!!), 조건에 따라 값을 선택함.
// let x = 10;
// let result = x >5 ? "크다" : "작다";
// console.log(result);

let y = 8;
// 3항연산자를 이용해서 y가 10보다 작은 경우 작다를
// console.log로 출력
// 10보다 크다면 크다를 출력해라.

let result = y < 10 ? "작다" : "크다"; 
console.log(result);

