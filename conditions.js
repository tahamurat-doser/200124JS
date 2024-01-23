console.log("*** CONDITIONS ***");

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
const num2 = 5;
const num3 = 30;
const num4 = 22;
if (num2 > num3 && num2 > num4) {
  console.log("enbüyük sayı", { num2 });
} else if (num3 > num2 && num3 > num4) {
  console.log("en büyük sayı", { num3 });
} else {
  console.log("en büyük sayı", { num4 });
}
const enbüyük = Math.max(num2, num3, num4);
console.log("En büyük:", enbüyük);

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

const sayi1 = 101;
const sayi2 = 99;
const sayi3 = 67;

let enBüyük =
  sayi1; /* burada enBüyük diye bir değişken tanımlıyoruz ve sayilardan birini buna atayarak algoritmayı oluşturuyoruz. burada else if kullanmadık çünkü kullansaydık ilk şartı bulduğunda devam etmeyecekti. bur da değişken olarak var ı değil let i tercih ettik çünkü var global bir değişken ve  kullansanızda kullanmasanız da bellekte gereksiz yer kaplıyor. */

if (sayi2 > enBüyük) {
  enBüyük = sayi2;
}

if (sayi3 > enBüyük) {
  enBüyük = sayi3;
}
console.log("EnBüyük:", enBüyük);

//! Ornek: Condition birleştirme

const yaş = 14;
const cinsiyet = "erkek";
const sağlıklı = true;

//? string.toLowerCase()  --> built-in fonksiyon (JS nin içerisinde tanımlı olan fonksiyonlar)

const koşul =
  yaş >= 18 && cinsiyet.toLowerCase() === "erkek" && sağlıklı === true;
/* burada if in içine koşullarımızı yazmadık onun yerine true ve false sonucu veren bir değişken oluşturduk. if ide true ise şöyle yap değilse böyle yap diyerek kullandık. */

if (koşul) {
  /* boolen ifadelerde kısa yazma durumu vardır, bu ifadeyi koşul === true yazmadan da bu şekilde yazabiliriz. */ console.log(
    "Askerlik Yapmalı"
  );
} else {
  console.log("Askerlik Yapması gerekmez");
}
//? if(koşul === true)  ==> if(koşul) koşul true ise gir.
//* if(koşul === false)  ==> if(!koşul) koşul false ise gir.

const cumle = "Bugün günlerden Cumartesi";
const kucukHarfler = cumle.toLowerCase();
const buyukHarfler = cumle.toUpperCase();
console.log(kucukHarfler);
console.log(buyukHarfler);
/* MDN javascript geliştiricilerinin js için oluşturduğu detaylı bir sayfa. */
/* ternary iki şart varsa mantıklı  */
const hız = 130;
const mesaj = hız >= 120 ? "Hızlı" : "Yavaş";
console.log(mesaj);

const ücret = 1200;
const uyari = ücret >= 2000 ? "pahali" : " uygun";
console.log(uyari);

if (ücret >= 2000) {
  console.log("pahali");
} else {
  console.log("uygun");
}

hız >= 120 ? console.log("hizli") : console.log("yavaş");

const age = 21;

const not = age >= 20 ? "askerlik yapmali" : "askerlik yapmasina gerek yok";

console.log(not);

/* burada uzun olmayan şartlı yapılar için işimizi kısaltan bir özellik tanımladık, bunu iki çeşit kullanımını gösterd,k. */

const yil = 20;

const sonuc = yil <= 12 ? "cocuk" : yil <= 18 ? "teenager" : "yetiskin";

console.log(sonuc);
/* üçlü şart için bu şekilde de kullanılabilir. */

let durum = "";
if (yil <= 12) {
  durum = "cocuk";
} else if (yil <= 18) {
  durum = "teenager";
} else {
  durum = "yeyiskin";
}
console.log(durum);

const calismaSüresi = 12;
let maas = 30000;

calismaSüresi >= 10 ? (maas = maas * 1.5) : "";
console.log(maas);

maas = calismaSüresi >= 10 ? maas*1.5 : maas
console.log("Maaş:", maas);
/* tek durumlu senaryolarda short circuit kullanabilriz. */

let salary = 40000
let year = 10
let marriage = true
 
year >= 10 /* && marriage === true  */&& (salary = salary* 1.5) /* bu işlem öncekilerin kısaltılmış hali şeklinde, eğer ilk kısın true döndürürse ikinci kısmı yazdırıyor ama ilk kısın false döndürürse ikinci kısmı hiç dikkate almıyor.  aynı işlemi üçlü de yapabiliriz.*/
console.log(salary);