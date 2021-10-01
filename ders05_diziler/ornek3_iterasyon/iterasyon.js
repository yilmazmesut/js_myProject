//!          DIZILERDE ITERASYON

//! For Dongusu

const koordinatlar = [120, 100, -100, 220, 330, -50];

//SORU: yukaridaki dizideki elemanlardan negatif ve pozitif olanlari ayri ayri toplayin
// ve konsolda yazdirin:

let pozitif=0;
let negatif=0;

for (let i = 0; i < koordinatlar.length; i++) {
    koordinatlar[i]<0 ? negatif+=koordinatlar[i] : pozitif+=koordinatlar[i];
}

console.log(`negatifler toplami: ${negatif} / pozitifler toplami: ${pozitif}`);



//! For in Dongusu  (en hizlisidir, sadece dizilerde kullanilir)

const koordinatlarr = [120, 100, -100, 220, 330, -50];
let pozitiff=0;
let negatiff=0;

for (let i in koordinatlarr) {
    koordinatlarr[i]<0 ? negatiff+=koordinatlarr[i] : pozitiff+=koordinatlarr[i];
}



// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

/*
const hayvanlar=["aslan","fil","kartal","kanarya","aslan","aslan","timsah"];
const ara= prompt("sayisini merak ettigin hayvanin adini yaz..");

const bulDondur= function (ara) {

    let hayvanSayisi=0;

    for (let i in hayvanSayisi) {
        if(hayvanlar[i]==ara) {
            hayvanSayisi++;
        }
    }
    hayvanSayisi==0 ? alert("aradigin hayvandan bulunamadi") : alert(`aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane bulunmaktadir`);
}
bulDondur(ara);
*/



//! For of Dongusu  (heryerde kullanim alani var)
// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. 
//Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur

let arabalar= ["BMW","Volvo","Mini"];

for (let i of arabalar) {
    console.log(i);
}



//! for each methodu

// for each methodu orijinal diziyi bozmaz

let ogrenciler= ["Onur","Hakan","Furkan"];
ogrenciler.forEach((x) => console.log(x));

ogrenciler.forEach((deger, index) => console.log(index + ".kisi" + deger + "dir"));

console.log(ogrenciler);



//! map methodu orijinal diziyi degistirmez

//SORU: butun elemanlarin 3 katini aliniz:
const rakamlar= [3,5,3,26,7,9];
console.log(rakamlar.map((x) =>x*3));   // herbirinin 3 katini alip tek tek yazdirdik

console.log(rakamlar.map((x, index) => `${index+1}. elemanin 3 kati ${x*3} dir`));


//Soru: isimler dizininin icerisindeki herismi buyuk harf olarak yeni bir diziye sakla

const isimler = ["Ahmet","mehmet","ismet","SAFFET","Can","Canan","Cavidan"];
const buyuk= isimler.map((x) => x.toUpperCase());
console.log(buyuk);

document.querySelector(".baslik").textContent=buyuk.join(", "); //! Join
// index.html deki basligi buyuk list ile degistirdik

//! Filter Methodu

//SORU: fiyatlar dizisindeki 250 den buyuk fiyatlari yazdir:

const fiyatlar= [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t>250));



//SORU: maası 4000 $’dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz:
const maaslar = [3000, 5000, 4000, 6000, 6500];
maaslar.filter((t) => t<4000).map(t=>t*1.5).forEach((t)=>console.log(t));   // 1.yol: dizi disi yazdirma

const yeni = maaslar.filter((t) => t<4000).map(t=>t*1.5);   
console.log (yeni);     // 2.yol: dizi icerisinde yazdirma


//SORU: ilk harfi A olanlari konsolda yazdirin:
const adlar= ["Samet","Hakkı","Duygu","Emrullah","Bilal","Ali","Ahmet","Hasan","Defne","Serdar"];
adlar.filter((x)=>x.startsWith("A")).forEach((x)=>console.log(x));



//! reduce()
//cikis methodudur, reduce'den sonra foreach calismaz

const maaslarim= [3000,5000,4000,2000,1000];
console.log(maaslarim.reduce((x,y)=> x+y, 0));   // 0 sayisi initialize'dir (int toplam=0) gibi

