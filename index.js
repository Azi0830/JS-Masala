/*
1. Write a program that stores a list of items in an array and allows the user to add, 
remove, or update items in the list using object methods.

2. Implement a simple shopping cart system using objects, where the user can add items to the cart, 
remove items from the cart, and calculate the total cost of the items in the cart.

3. Create a program that stores a list of students with properties such as name, 
age, and grade. Allow the user to add new students to the list, remove students from the list, and display a list of all the students in the system.

4. Write a function that takes an object representing a person with properties such as name, 
age, and gender, and returns a formatted string with the person's information.

5. Implement a simple banking system using objects, where the user can create accounts, 
deposit money into accounts, withdraw money from accounts, and display the account balance.

6. Create a program that simulates a library system using objects, where the user can add books to the library, borrow books from the library, 
return borrowed books, and display a list of all books in the library.
*/

/*
1. Massivdagi elementlar ro'yxatini saqlaydigan va foydalanuvchiga ob'ekt usullaridan foydalangan holda ro'yxatdagi 
narsalarni qo'shish, o'chirish yoki yangilash imkonini beradigan dastur yozing.

2. Ob'ektlardan foydalangan holda oddiy xarid qilish savat tizimini amalga oshiring, bu erda foydalanuvchi 
savatga narsalarni qo'shishi, savatdan narsalarni olib tashlashi va savatdagi narsalarning umumiy narxini hisoblashi mumkin.

3. Ismi, yoshi, sinfi kabi xususiyatlarga ega o‘quvchilar ro‘yxatini saqlaydigan dastur tuzing. 
Foydalanuvchiga roʻyxatga yangi talabalar qoʻshish, 
talabalarni roʻyxatdan oʻchirish va tizimdagi barcha talabalar roʻyxatini koʻrsatishga ruxsat bering.

4. Ismi, yoshi va jinsi kabi xususiyatlarga ega bo'lgan shaxsni ifodalovchi ob'ektni oladigan va shaxs ma'lumotlari bilan
 formatlangan qatorni qaytaradigan funktsiyani yozing.

5. Ob'ektlardan foydalangan holda oddiy bank tizimini amalga oshirish, bu erda foydalanuvchi hisobvaraqlar yaratishi,
 hisobvaraqlarga pul qo'yishi, hisobvaraqlardan pul olishi va hisob balansini ko'rsatishi mumkin.

6. Ob'ektlar yordamida kutubxona tizimini simulyatsiya qiluvchi dastur yarating, bunda foydalanuvchi kutubxonaga kitob qo'shishi,
 kutubxonadan kitob olishi, olingan kitoblarni qaytarishi va kutubxonadagi barcha kitoblar ro'yxatini ko'rsatishi mumkin.
*/

// 1 ok
// var student = {
//   name: "Azimjon",
//   surname: "Turakulov",
//   age: 25,
// };

// //qo'shish
// student.status = "日本経済大学";

// // O'zgartirish
// student.age = 26;

// //O'chirish
// delete student.surname;

// console.log(student);7

// 2 ok

// var shopping = {
//   apple: {
//     count: 5,
//     price: 1200,
//   },
//   book: {
//     count: 2,
//     price: 700,
//   },
//   potate: {
//     count: 6,
//     price: 7000,
//   },
// };

// shopping.pomidor = {
//   count: 2,
//   price: 5000,
// };
// delete shopping.apple;

// var value = Object.values(shopping);
// var sum = 0;

// for (var i = 0; i < value.length; i++) {
//   sum += value[i].count * value[i].price;
// }
// console.log(sum);

// 3.1 ok

// var students = {
//   azim: {
//     name: "Azimjon",
//     surname: "Turakulov",
//     age: 25,
//   },
//   sardor: {
//     name: "Sardor",
//     surname: "Suyunov",
//     age: 26,
//   },
// };

// students.asadbek = {
//   name: "Asadbek",
//   surname: "Abduvoitov",
//   age: 18,
// };

// delete students.sardor;

// console.log(students);

// 3.2

// function student(list) {
//   var student = {};

//   if (list.ish === "qushish") {
//     student[
//       list.name
//     ] = `"Ism" ${list.name}, "yosh"${list.age}, "Klass"${list.klass}`;
//   } else if (list.ish === "uzgartirish") {
//     student[
//       list.name
//     ] = `"Ism" ${list.name}, "yosh"${list.age}, "Klass"${list.klass}`;
//   } else if (list.ish === "delete") {
//     delete student[list.name];
//   }
//   return student;
// }
// console.log(
//   student({ ish: "qushish", name: "Azim Turakulov", age: 24, klass: 4 })
// );
// console.log(
//   student({ ish: "uzgartirish", name: "Azim Turakulov", age: 24, klass: 4 })
// );
// console.log(
//   student({ ish: "delete", name: "Sardor Suyunov", age: 28, klass: 2 })
// );
// console.log(
//   student({ ish: "qushish", name: "Asadbek Abduvoitov", age: 18, klass: 4 })
// );

/*
4. Ismi, yoshi va jinsi kabi xususiyatlarga ega bo'lgan shaxsni ifodalovchi ob'ektni oladigan va shaxs ma'lumotlari bilan
 formatlangan qatorni qaytaradigan funktsiyani yozing.
*/
// 4
// var person = {
//   name: "Azim",
//   age: "25",
//   gender: "male",
// };

// console.log(person);

function person(shaxs) {
  var person = {};
}
person();

/*
1. Create an array of numbers and return the sum of all elements.
2. Create an array of strings and return the length of the longest string.
3. Create an array of numbers and find the average of all elements.
4. Create an array of objects with key-value pairs and filter out objects with a specific key-value pair.
5. Create an array of numbers and find the maximum value in the array.
6. Create an array of strings and sort the array in alphabetical order.
7. Create an array of numbers and find the index of a specific number in the array.
8. Create an array of objects with key-value pairs and sort the array based on a specific key.
9. Create two arrays of numbers and merge them into a single array.
10. Create an array of strings and remove any duplicates from the array.
*/

/*
1. Raqamlar massivini yarating va barcha elementlarning yig'indisini qaytaring.
2. Satrlar massivini yarating va eng uzun satr uzunligini qaytaring.
3. Sonlar massivini tuzing va barcha elementlarning o‘rtacha qiymatini toping.
4. Kalit-qiymat juftliklari bilan ob'ektlar massivini yarating va
 aniq kalit-qiymat juftligi bilan ob'ektlarni filtrlang.
5. Raqamlar massivini tuzing va massivdagi maksimal qiymatni toping.
6. Satrlar massivini yarating va massivni alifbo tartibida tartiblang.
7. Raqamlar massivini tuzing va massivdagi aniq sonning indeksini toping.
8. Kalit-qiymat juftliklari bilan ob'ektlar massivini yarating va 
 massivni ma'lum bir kalit asosida tartiblang.
9. Ikkita sonlar massivi yarating va ularni bitta massivga birlashtiring.
10. Satrlar massivini yarating va massivdan dublikatlarni olib tashlang.
*/
// 1
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   numbers.reduce((zero, value) => {
//     return zero + value;
//   }, 0)
// );

// 2.1 function
//2. Satrlar massivini yarating va eng uzun satr uzunligini qaytaring.

// var fruits = ["olma", "anor", "shaftoli", "behi"];

// function engUzun(satrlar) {
//   let engUzunSatr = 0;
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].length > engUzunSatr) {
//       engUzunSatr = fruits[i].length;
//     }
//   }
//   return engUzunSatr;
// }
// let eng = engUzun(fruits);
// console.log("Eng uzun meva yozishishi", eng);

// 2.2
// var fruits = ["olma", "anor", "shaftoli", "behi"];

// let eng = 0;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].length > eng) {
//     eng = fruits[i].length;
//   }
// }
// console.log(eng);

// 3.1
/*3. Sonlar massivini tuzing va barcha elementlarning o‘rtacha qiymatini toping.*/

let sonlar = [10, 20, 30, 40, 50];
let jami = 0;
for (let i = 0; i < sonlar.length; i++) {
  jami += sonlar[i];
}
console.log(jami / sonlar.length);
