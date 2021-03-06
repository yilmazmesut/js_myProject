/*================================================================
    KONSOL  */

//console.log("Hello Javascript");
//alert("dikkat");
//console.warn("bu bir uyaridir");
//console.error("bu bir hatadir");
//prompt("adinizi giriniz");

//=============== DEGISKEN TANIMLAMA=============================
// VAR:    (gunumuzde kullanimi azaldi)
var isim="ipek";
console.log(typeof isim);
isim=3.14;
console.log(typeof isim);

//=====================================================
// CONST:
// TODO: baslangicta bir deger atanir, sonrasinda baska bir deger atanamaz)
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive’ler hariç).
// ! mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. 
// ! çünkü js de çok rahat değisiklik yapiliyor, var, let sikinti cikarabilir.

const piSayisi=3.14;
//piSayisi=3;

//=======================================================
// CONST:

let fiyat;
fiyat=10;
console.log(typeof fiyat);
fiyat="Erdem";
console.log(typeof fiyat);

// string tanimlamak icin 3 farkli karakter kullanilabilir

let name1="Alaaddin";
let name2='Faruk';
let name3=`Oguzhan`;
console.log(name3);

//=========ARITMETIK OPERATORLER==============================
const kola=5;
const cips=6;
const ekmek=2;
console.log(kola+cips+ekmek);
console.log("toplam fiyat", kola + cips + ekmek);

const ad="can";
const soyad="canan";
console.log(ad+soyad);

const s1=7;
let s2="7";
console.log(s1+s2);

console.log("benim adim" + " " + ad + " " + "benim yasim" + " " + s1);

// Template literal===================================
console.log(`benim adım ${ad} benim yasım ${s1}`);


// us alma **
const taban=2;
const us=3;
console.log(taban**us);

// mod alma %
const sayi=123;
const birler=sayi%10;
console.log(birler);

const s3=5;
const s4="5";
console.log(s3==s4);
console.log(s3===s4);

// TIP DEGISIMLERI=========================================================
const para="100";
console.log(para+15);   //10015
console.log(Number(para)+15);   //115

const sayi5=56;
console.log(String(sayi5) + sayi5); // gecici bir String'e dondurme olur
