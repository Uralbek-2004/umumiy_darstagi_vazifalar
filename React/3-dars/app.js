//1-misol
// function salomAstrum() {
//     console.log("Salom Astrum");
// }
// salomAstrum();


//2-misol

// function a(ism) {
//     console.log("Salom, " + ism + "!");
// }

// let b = prompt("Ismingizni kiriting:");
// a(b);


//3-misol
// function kattaSon(a, b) {
//     return a > b ? a : b;
// }
// console.log(kattaSon(5, 10)); 

// 4-misol

// function faktorial(n) {
//     if (n === 0) return 1;
//     return n * faktorial(n - 1);
// }

// let son = parseInt(prompt("Iltimos, son kiriting:"));
// console.log(faktorial(son));

// 5-misol

// function kvadrat(n) {
//     return n * n;
// }

// let qiymat =(prompt("Iltimos, son kiriting:"));
// console.log(kvadrat(qiymat)); 


// 6-misol
// function kub(n) {
//     return n * n * n;
// }

// let son = parseInt(prompt("Iltimos, son kiriting:"));
// console.log(kub(son));

// 7-misol
// function engKatta(arr) {
//     return Math.max(...arr);
// }
// console.log(engKatta([2, 4, 5, 30, 54, 56, 23, 100, 0, 3, 6]));

//8-misol
// function engUzun(arr) {
//     let uzunMatn = arr.reduce((a, b) => a.length > b.length ? a : b);
//     return uzunMatn;
// }
// console.log(engUzun(["Murodon", "O'rolbek", "Javlon", "Hasan", "Shoxjoxon"])); 

//9-misol

// function ortacha(arr) {
//     let summa = arr.reduce((a, b) => a + b, 0);
//     let urtachaQiymat = summa / arr.length;
    
//     let engKichik = Math.min(...arr);
    
//     console.log("O'rtacha qiymat:", urtachaQiymat);
//     return engKichik;
// }

// console.log("Eng kichik son:", ortacha([2, 4, 5, 30, 54, 56, 23, 100, 0, 3, 6]));

//10-misol
function engQisqa(arr) {
    let qisqaMatn = arr.reduce((a, b) => a.length < b.length ? a : b);
    return qisqaMatn;
}
console.log(engQisqa(["Murodon", "O'rolbek", "Javlon", "Hasan", "Shoxjoxon"])); 





