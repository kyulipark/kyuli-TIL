// // // 나이든 유저 

// // var user ={
// //     name:"john",
// //     age:20,
// // };

// // var getAged = function (user, passedTime){
// //     var newUser = {};
// //     for (var prop in user){
// //         newUser[prop]=user[prop];
// //     }

// //     newUser.age +=passedTime;
// //     return newUser;
// // };

// // var agedUser = getAged(user,6);

// // var agedUserMustBeDifferntFromUser = function(user1, user2){
// // console.log(user1);
// // console.log(user2);

// // if (!user2){
// //     console.log("Failed! user2 doesn't exist!");
// // } else if (user1 !== user2){
// //     console.log(
// //         "Passed! If ypu become older, you will be different from you in th past!");
    
// // } else {
// //     console.log("Failed! User smae with past one");
// // }
// // };

// // agedUserMustBeDifferntFromUser(user, agedUser);

// // function inchToCm(inch){
// //     var cm = inch *2.54;
// //     return cm;
// // }
// // var result = inchToCm(27);
// // console.log(result);


// // if문

// let y = "hello world";
// if (y.length >= 5){
//     console.log(y.length);
// }
   

// //if- else문 

// let x = 10;
// if(x >0){
//     console.log("x는 양수입니다.")
// }else{
//     console.log("x는 음수입니다.")
// }

// //if- else if -else문

// let z =10;

// if( z<0){
//     console.log("1");
// }else if( z >=0 && z < 10){
//     console.log("2");
// } else{
//     console.log("3");
// }

// //switch 문

// let fruit = "사과";

// switch(fruit){
//     case "사과":
//     console.log("사과입니다.");
//     break;
//     case "바나나":
//     console.log("바나나입니다.");
//     break;
//     case "키위":
//     console.log("키위입니다.");
//     break;
//     default:
//     console.log("아무것도 아닙니다.");
//     break;
// }

// //practice--------------------------------

// function timeTo(num){

// if( num < 12) {
// return "오전입니다"
// } else{
//     return "오후입니다"
// }
// }
// console.log(timeTo(18));


// //cm를 inch로 단위변경
// function cmToInch(cm){
//     var inch=cm/2.54;
//     return inch;
// }
// // // console.log(cmToInch(24));

// // var result = cmToInch(24);
// // console.log(result);



// // // //inch를 cm로 단위변경
// function inchToCm(inch){
//     var cm=inch * 2.54;
//     return cm;
// }
// // console.log(inchToCm(27));

// var result = inchToCm(27);
// console.log(result);


// 원의 반지름을 입력받아 넓이와 둘레를 구해라 '넓이 = 3.14 *반지름 *반지름', '둘레 = 2* 3.14*반지름', 원의 반지름 4
// function radiusNum(num){
// var radius1 = 3.14 * num * num;
// var radius2 = 2* 3.14 * num;
// return [radius1,radius2];
// }
// console.log(radiusNum(4));

//환율 바꾸기
// function changeMoney(num){
//     var KRW = num*1207;
//     return KRW;
// }
// console.log(changeMoney(1000));

//if 조건문 
// let y = "Hello, world";
// if(y.length >= 5){
//     console.log(y.length);
// }

// for(let i=0; i <10; i++){
//     console.log("for문 돌아감"+i);
// }

// const arr = ["one","two","three","four","five"];
// for (let i=0; i<arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
// }


// for (let i=0; i<11; i++){
//     if(i%2===0){
//         console.log(i+"는 2의 배수입니다.")
//     }
// }



// let person = {
//     name: "Kyu"
//     age: 30,
//     gender:"female"
// };

// for (let key in person){
//     console.log(key + ":"+person[key]);
// }



// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


// let i = 3;
// while(i<100){
// if(i%5===0 && i>=5){
//     console.log(i+"는 5의 배수")
// }
// i++;
// }
