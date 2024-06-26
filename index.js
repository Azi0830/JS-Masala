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

// function person(shaxs) {
//   var person = {};
// }
// person();

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
//2. Create an array of strings and return the length of the longest string.
//2. Satrlar massivini yarating va eng uzun satr uzunligini qaytaring.

// var fruits = ["olma", "anor", "shaftoli", "behi"];

// function engUzun(fruits) {
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
//3. Create an array of numbers and find the average of all elements.

// let sonlar = [10, 20, 30, 40, 50];
// let jami = 0;
// for (let i = 0; i < sonlar.length; i++) {
//   jami += sonlar[i];
// }
// console.log(jami / sonlar.length);
// console.log();

// 4.1
/*4. Kalit-qiymat juftliklari bilan ob'ektlar massivini yarating va
 aniq kalit-qiymat juftligi bilan ob'ektlarni filtrlang.*/
// shunga tushanmadim!!!!

// Ob'ektlarni massiv sifatida yaratish

// var objectsArray = [
//   { nomi: "Obekt1", qiymati: 2 },
//   { nomi: "Obekt2", qiymati: 5 },
//   { nomi: "Obekt3", qiymati: 7 },
//   { nomi: "Obekt4", qiymati: 10 },
// ];

// // Berilgan kalit-qiymatga mos keluvchi ob'ektlarni filtrlash
// function filterObjectsByKeyValue(array, key, value) {
//   return array.filter(function (obj) {
//     return obj[key] === value;
//   });
// }

// Misol: qiymati 5 bo'lgan ob'ektlarni tanlash
// var filteredObjects = filterObjectsByKeyValue(objectsArray, "qiymati", 5);
// console.log(filteredObjects); // Ekranga chiqarish

// // 5
// /*5. Raqamlar massivini tuzing va massivdagi maksimal qiymatni toping.*/

// var number = [1, 5, 8, 3, 89, 28, 51, 5, 5, 18];

// var maxNumber = Math.max.apply(null, number);

// console.log(maxNumber);

// 6
/* Satrlar massivini yarating va massivni alifbo tartibida tartiblang. */

// var names = ["Azim", "Sardor", "urus", "Kazak", "Uzbek"];
// names.sort();
// console.log(names);

// 7
// Raqamlar massivini tuzing va massivdagi aniq sonning indeksini toping.

// let sonlar = [10, 20, 30, 40, 50];

// var aniqSon = 20;

// for (let i = 0; i < sonlar.length; i++) {
//   if (aniqSon === sonlar[i]) {
//     console.log(i);
//   }
// }

// 8
/*Kalit-qiymat juftliklari bilan ob'ektlar massivini yarating va 
 massivni ma'lum bir kalit asosida tartiblang. */
// tushunolmadim!!!!!

// function sortByKey(array, key) {
//   return array.sort(function (a, b) {
//     var x = a[key];
//     var y = b[key];
//     return x < y ? -1 : x > y ? 1 : 0;
//   });
// }

// var student = [
//   { name: "Azimbek", age: 24 },
//   { name: "Kozim", age: 14 },
//   { name: "Asadbek", age: 18 },
//   { name: "Sardor", age: 25 },
// ];

// var sortedArray = sortByKey(student, "qiymati");
// console.log(sortedArray);

// // Ob'ektlarni massiv sifatida yaratish
// var objectsArray = [
//   { nomi: "Ob'ekt1", qiymati: 5 },
//   { nomi: "Ob'ekt2", qiymati: 2 },
//   { nomi: "Ob'ekt3", qiymati: 7 },
//   { nomi: "Ob'ekt4", qiymati: 3 },
// ];

// // Qiymat asosida massivni tartiblash (masalan, 'nomi' bo'yicha)
// var sortedArray = sortByKey(objectsArray, "qiymati");
// console.log(sortedArray); // Ekranga chiqarish

// 9
// Ikkita sonlar massivi yarating va ularni bitta massivga birlashtiring.

// let sonlar = [10, 20, 30, 40, 50];
// let sonlar2 = [10, 20, 30, 40, 50];

// console.log(...sonlar2, ...sonlar);
// console.log(sonlar2.concat(sonlar));

// 10
// Satrlar massivini yarating va massivdan dublikatlarni olib tashlang.
// tushunmadim !!!!

// var fruits = ["apple", "banana", "orange", "apple", "kiwi", "banana"];

// var uniqueStringsArray = fruits.filter(function (value, index, array) {
//   return array.indexOf(value) === index;
// });
// console.log(uniqueStringsArray);

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
1. Satrni kiritish sifatida qabul qiluvchi va qatordagi so‘zlar sonini qaytaruvchi funksiya yozing.

2. Ob'ektlar uchun xossalari bo'lgan xarid qilish savatini ifodalovchi ob'ekt yarating
 (nom va narx bo'yicha xususiyatlarga ega ob'ektlar majmuasi). Savatcha ob'ektini argument
  sifatida qabul qiladigan va savatdagi barcha elementlarning umumiy qiymatini qaytaradigan funksiyani yozing.

3. Raqamni kiritish sifatida qabul qiladigan va agar son tub son bo‘lsa, rost, aks holda noto‘g‘ri
 qiymatini qaytaradigan funksiya yozing.

4. Ism, sinf va mavzular (satrlar massivi) xususiyatlariga ega talabani ifodalovchi ob'ekt yarating.
 Talaba obyektini argument sifatida oladigan va talabaning o‘rtacha bahosini qaytaruvchi funksiya yozing.

5. Satrni kirish sifatida qabul qiladigan va barcha unlilar “o” harfi bilan almashtirilgan qatorni qaytaradigan funksiya yozing.

6. Sarlavha, muallif va sahifalar xususiyatlariga ega kitobni ifodalovchi ob'ekt yarating.
 Kitob ob'ektini argument sifatida qabul qiladigan va "muallif bo'yicha sarlavha, sahifalar sahifalari"
  formatida qatorni qaytaradigan funktsiyani yozing.

7. Raqamlar massivini kirish sifatida qabul qiluvchi va massivdagi barcha sonlar yig‘indisini qaytaruvchi funksiya yozing.

8. Restoranni nomi, menyusi (mahsulot va narx boʻyicha xossalari boʻlgan obʼyektlar majmuasi)
 va vegan (restoran vegan variantlari xizmat qilishini koʻrsatuvchi mantiqiy) koʻrsatuvchi obyekt yarating.
  Restoran ob'ektini argument sifatida qabul qiladigan va barcha menyu elementlari va narxlarni
   ko'rsatadigan qatorni qaytaradigan funktsiyani yozing.

9. Satrni kirish sifatida qabul qiladigan va agar satr palindrom bo'lsa, rost, aks holda noto'g'ri qiymatini
 qaytaradigan funksiya yozing.

10. Egasi, balansi va tranzaksiyalari uchun xossalari bo‘lgan bank hisobini ifodalovchi ob’ekt yarating
 (sana va summa bo‘yicha xossalari bo‘lgan obyektlar massivi). Bank hisobi obyektini argument sifatida oladigan va
  hisobning joriy qoldig‘ini qaytaruvchi funksiya yozing.*/

// M 1

// function countWords(sentence) {
//   // Bo'shliqlarni olib tashlash
//   sentence = sentence.trim();

//   // So'zlar sonini hisoblash
//   if (sentence === "") {
//     return 0; // agar satr bo'sh bo'lsa, 0 qaytariladi
//   } else {
//     // So'zlarni bo'shliklar orqali ajratib olish
//     const words = sentence.split(/\s+/);
//     return words.length; // So'zlar sonini qaytarish
//   }
// }

// // Misol:
// const sentence = "Bu bir misol satr";
// console.log("So'zlar soni:", countWords(sentence));

// M2

// class students {
//   constructor(name, surname, age) {
//     (this.name = name), (this.surname = surname);
//     this.age = age;
//   }
//   fullName(masseg = "not masseg") {
//     return `${this.name} ${this.surname} ${masseg}`;
//   }
// }

// var student1 = new students("Azimbek", "Turakulov", 25);
// var student2 = new students("Sardor", "Suyunov", 28);
// var student3 = new students("Asadbek", "Abduvoitov", 18);

// console.log(student1.fullName("I.m student"));
// console.log(student2.fullName());
// console.log(student3.fullName());

// class student {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullNam = function (text = "not") {
//       `${this.name} ${this.surname}${text}`;
//     };
//   }
// }

// var user1 = new student("Asadbek", "Abduvoitov", 18);
// var user2 = new student("Azim", "Turakulov", 25);
// console.log(user1.fullNam());
// console.log(user2);

// function strStr(haystack, needle) {
//   if (needle === "") {
//     return 0;
//   }

//   let index = haystack.indexOf(needle);

//   return index;
// }

// console.log(strStr("sadbutsad", "but"));

//
// if (n % 2 === 0) {
//   console.log("juft");
// } else {
//   console.log("toq");
// }
for (let i = 0; i < n; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
// console.log(sum);

// if (n > 0) {
//   console.log("manfiy");
// } else if (n === 0) {
//   console.log(n);
// } else {
//   console.log("musbat");
// }

for (let i = 1; i <= 10; i++) {
  // console.log(`${i} * ${n} = ${i * n}`);
}

for (let i = 0; i <= n; i++) {
  sum += i;
}
// console.log(sum);
var sum = 1;

for (let i = 1; i <= n; i++) {
  sum = i * sum;
  // console.log(sum);
}

var n = 2019;

if (n % 4 === 0) {
  // console.log("kabisa yili");
} else {
  // console.log("emas");
}

var shop = {
  apple: {
    count: 5,
    price: 200,
  },
  anor: {
    count: 2,
    price: 1000,
  },
};

var value = Object.values(shop);
var sum = 0;

for (let i = 0; i < value.length; i++) {
  sum += value[i].count * value[i].price;
}
console.log(sum);
