console.log("*** CONDITIONS ***")


//const num1 = prompt("Bir sayı giriniz")/* promt komutu default olarak hep string alır o yüzden bizim girdiğimiz 10 değeri burada string bir değer, birde consol daki renk te bizi bunu veriri stringelr renksiz, number olsa mor olacaktı. */
//console.log(num1, typeof num1)/*console.log içine typeof la beraber değeri yazarsam consolda tipini de vermiş olur. */
//const num2 = 5
//console.log("toplam:", num1 + num2) //! num1 string olduğu için num2 number türünde olsada string birleştime yapar. 

//const num3 = Number(prompt("Bir sayı giriniz"))/* Number fonsiyonu içine alarak tipini number yaptım. */
//console.log("toplam:", num3 + num2)
//console.log(num3, typeof num3)
//const num4 = +(prompt("Bir sayı giriniz")) /* önüne + koyarakta tipini değiştirebiliriz. */

/* if (num1 > 0) {
    console.log("Girilen sayı sıfırdan büyüktür");
}else if (num1 <0) {
    console.log("Girilen sayı sıfırdan küçüktür");
}else {
    console.log("Girilen sayı sıfıra eşittir.");
} */
//? Örnek
const num2 = 5
const num3 =30
const num4 =22
if (num2 > num3 && num2> num4 ) {
    console.log("enbüyük sayı",{num2});
}else if (num3 > num2 && num3 > num4) {
    console.log("en büyük sayı", {num3});
}else {
    console.log("en büyük sayı", {num4});
}
const enbüyük = Math.max(num2, num3, num4)
console.log( "En büyük:", enbüyük);

/* sayi1 = 45.00003
sayi2 = 15.00002
sayi3 = 45.00001 */

/* if (sayi1 >= sayi2 && sayi1 >= sayi3) {
       console.log("Enbuyuk:", sayi1)
     } else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
       console.log("Enbuyuk:", sayi2)
     } else if (sayi3 >= sayi1 && sayi3 >= sayi2) {
       console.log("Enbuyuk:", sayi3)
     } else {
       console.log("yanlis sayi formati")
     } */

const sayi1 = 101
const sayi2 = 99
const sayi3 = 67

let enBüyük = sayi1 /* burada enBüyük diye bir değişken tanımlıyoruz ve sayilardan birini buna atayarak algoritmayı oluşturuyoruz. burada else if kullanmadık çünkü kullansaydık ilk şartı bulduğunda devam etmeyecekti. */

if (sayi2 > enBüyük) {
    enBüyük = sayi2
}

if (sayi3 > enBüyük) {
    enBüyük = sayi3
}
console.log("EnBüyük:", enBüyük)