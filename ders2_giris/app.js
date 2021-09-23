//======== KARAR YAPILARI ========================

// ======= IF-ELSE ==============================
const s1=Number(prompt("birinci sayi"));
const islem=prompt("islem giriniz");
const s2=Number(prompt("ikinci sayi"));

let sonuc=0;
if (islem=="+") {
    sonuc=s1+s2;
} else if (islem=="-") {
    sonuc=s1-s2;
} else if (islem=="*") {
    sonuc=s1*s2;
} else if (islem=="/") {
    sonuc=s1/s2;
}
console.log("sonuc :" + sonuc);