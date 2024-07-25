// //문자열로 구성된 리스트 strings와 정수 n이 주어졌을때, 
// // 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬, 
// // 예를들어 str = ["sun","bed","car"]이고 n=1;,
// // 각 단어의 인덱스 1의 문자 "u","e","a"로 str을 정렬.

// //str은 길이 1이상, 50이하인 배열, 소문자 알파벳, 원소길이 1이상 100이하
// // 모든 str의 원소의 길이는 n 보다크다, 인덱스 1의 문자가 같은 문자열이 여럿일때,
// // 사전 순으로 앞선문자열이 앞쪽


// // //sort


// // function solution(strings, n){
// //     var answer =[];

// // for (var i=0; i<strings.length; i++){
// //     strings[i] = strings[i][n] + strings[i];
// // }
// // strings.sort();

// // for(var j=0; j<strings.length; j++){
// //     strings[j]= strings[j].replace(strings[j][0],"");
// // answer.push(strings[j]);
// // }
// //     return answer;
// // }

// // solution(["sun","bed","car"], 1);


// //불리언타입 복습(js문법 1주차 1-4 데이터타입2)
// // let bool1 = true;
// // let bool2 = false;

// // console.log(bool1);
// // console.log(typeof bool1);
// // console.log(bool2);
// // console.log(typeof bool2);

// // let number = 10

// // console.log(number++);
// // console.log(number++);
// // console.log(number++);

// // console.log(++number);
// // console.log(++number);
// // console.log(++number);

// // console.log(number++);
// // console.log(++number);
// // console.log(--number);
// // console.log(--number);


// // const r = 10
// // let r = 10

// // console.log(`넓이=${3.14*r*r}`);
// // console.log(`둘레=${2*3.14*r}`);

//------------------------------------------------------ 실습1!!
// inch 단위의 숫자를 입력받아 cm로 변환하여 출력하는 프로그램, 인치를 센치로 바꾸려면 2.54를 곱해야함.

// function inchToCm(inch){
//     var cm = inch *2.54;
//     return cm;
// }
// var result = inchToCm(27);
// console.log(result);

//------------------------------------------------------ 실습1!!
// 현재 환율을 기반으로 사용자에게 숫자를 입력받아 달러(USD)에서 원화(KRW)로 환율 변환,
// 현 시점의 환율 1달러 1207원임.

// function changeMoney(num){
// var KRW = num*1207;
// return KRW;
// }
// console.log(changeMoney(1000));









// //--------------------------------------------------- 오답노트 !! //


// // 1. let uninitialized;
// // console.log(uninitialized); // 결과값 <undefined >

// // 2. < const > apple = "사과"; //const는 한번만 선언할 수 있기때문.
// // apple = "바나나"; // TypeError: Assignment to constant variable

// // 3. let lotto = [3, 8, 13, 19, 21, 32]; 
// // console.log(lotto[3]); // 결과값 < 19 > // 0부터 세기 때문.

// // 4. 
// // let mySchedule = ""; //undefined이고, 
// // console.log(mySchedule || false); // < false >  false||false이기 때문에.
// // console.log(!!mySchedule); // < false >  !!가 사용되면 불리언으로 바뀌어서, undefined이기 때문에 false가 된다.


// // ## 2. 객체 선언해보기
// // 지난 시간에 배웠던 객체(object)를 다시 복습해보며, 아래의 조건을 충족하는 객체를 직접 선언해보세요.
// // - 자기 자신을 소개하는 객체입니다.
// // - 이름, 나이, MBTI 세 가지 키와 값이 포함되어 있어야 합니다.
// // - 콘솔 창에 이름, 나이, MBTI가 나오도록 console.log() 를 찍어보세요.
// // 예시


// ## 3. 홀짝 판별기
// 지난 시간에 배웠던 연산자를 활용하여, 숫자를 입력하면 홀수인지 짝수인지 판별하는 함수를 만들어 보려고 합니다. 다음과 같은 결과값이 나올 수 있도록 코드를 작성해 주세요.

// console.log(함수명(10)); // 결과값 "짝수";
// // console.log(함수명(7)); // 결과값 "홀수";
// // ```

// function oddToEven(num){
//   if(num %2 === 0){
//     return "짝수"
//   } else{
// return "홀수"
//   }
// }
// console.log(oddToEven(10));
// console.log(oddToEven(7));

