/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let var2 = "let変数";
// console.log(var2);

// var2 = "let変数を上書き";
// console.log(var2);

// const var3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";

// const val4 ={
//   name:"じゃけぇ",
//   age: 28,
// };
// val4.name = "jak";
// console.log(val4);

// const val5 =['dog', "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

// const name = "じゃけぇ";
// const age = 28;

// const message1 = "1.私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `2.私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// function func1(str){
// return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 =(num1,num2) =>{
//   return num1+num2;
// };

// console.log(func3(10,30));

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const massage1 = `1.名前は${myProfile.name}です。年齢は${myProfile.age}才です`;
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `2.名前は${name}です。年齢は${age}才です`;
// console.log(massage2);

// const myProfile = ['じゃけぇ',28];
// const message3 = `3.名前は${myProfile[0]}です。年齢は${myProfile[1]}才です。`;
// console.log(message3);

// const[name, age] = myProfile;
// const message4 = `4.名前は${name}です。年齢は${age}才です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");
// sayHello();

/**
 * スプレッド構文
 */
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// //sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// const arr4 =[10,20];
// const arr5 =[30,40];
// const arr6 =[...arr4];
// console.log(arr6);
// const arr7 =[...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * maplやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(30, 60));

/**
 * 論理演算氏の本当の意味
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す、左側がtrueなら左側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
