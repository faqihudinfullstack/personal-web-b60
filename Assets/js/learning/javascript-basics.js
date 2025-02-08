// alert("selamat pagi!!");

// let greetings = "selamat pagi!";
// console.log(greetings);

// let warning = "jangan lupa makan!";
// console.warn(warning); //peringatan
// console.error(warning); //error

// CONFIRM
// memberikan pilihan kepada yuser untuk klik ok atau cancel
// if (confirm("Apakah anda ingin menghapus?") === true) {
//   //perintah ketika ok diklik

//   console.log("Berhasil hapus");
// } else {
//   //perintah ketika cancel diklik
//   console.log("tidak jadi hapus");
// }

// Prompt
// let name = prompt("Masukkan nama anda");
// console.log(name);

// VAR, LET DAN KONST

// VAR

// var greetings = "selamat pagi";
// // console.log(greetings);
// var greetings = "selamat siang!";
// // console.log(greetings);

// LET

// let food = "Ketoprak";
// // let food = "bubur ayam";
// food = "Bubur ayam";
// console.log(`Aku pagi ini makan ${food}`);

// CONST

// const kapasitasBus = 59;
// const kapasitasBus = 49;  // ini tidak boleh larena diatas sudah disebut
// kapasitasBus = 49;
// console.log(kapasitasBus);

// OPERATOR ARITMATIKA ===> +, -, *, /, %
// let jumlah = 10 + 2;
// // console.log(jumlah);

// let kurang = 10 - 2;
// // console.log(kurang);

// let kali = 10 * 2;
// // console.log(kali);

// let bagi = 10 / 2;
// // console.log(bagi);

// let modulo = 10 % 3; // 10 dibagi 2 sisanya berapa? jdi yg dicari disini sisa pembagian yg tidak genap. contoh 10 dibagi 3 maka jawaban 1, karena 10 dibagi 3 sisa.
// console.log(modulo);

// // opeerator logika/pembanding
// // ==, ===, !=, >, <, <=, >=, &&, ||

// let suhu = 18;
// let suhuNormal = suhu > 20 && suhu < 30;
// // console.log(suhuNormal ? "suhunya normal" : "suhunya  tidak normal");

// const nilaiUTS = 80;
// const nilaiUAS = 80;

// let lulus = nilaiUTS >= 80 || nilaiUAS >= 80;
// console.log(lulus ? "lulus" : "tidak lulus");

// let username = "leo";
// let password = 1234;

// if (username === "leo" && password === "1234") {
//   console.log("berhasil masuk");
// } else {
//   console.log("username atau password salah");
// }

// let member = 5;

// if (member != 5) {
//   console.log("peserta harus terdiri dari 5 orang");
// } else {
//   console.log("memenuhi syarat jumlah peserta");
// }

// let name = "faqih";

function greetings(name, food) {
  console.log("selamat pagi!");
  console.log("nama saya :", name);
  console.log("saya suka makan :", food);
}

let name1 = "faqih";
let food1 = "soto ayam";

greetings("faqih", "soto ayam");

// PR pelajari tentang switch statment javascript, if/else, for loop, while, do while
