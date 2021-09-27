//=============== FONKSIYONLAR===================
//! 1. Yontem = Function Declaration:
//fonksiyonun tanimlanmasi cagrilmasindan once veya sonra olabilir
// function yazdirAd() {
//     console.log("Hakan");
// }
// yazdirAd();     //fonksiyonun cagrilmasi

/*Ornek: klavyeden girilen sayinin tek mi cift mi oldugunu gosteren 
bir fonksiyon yaziniz */
// const sayiniz = prompt("sayi giriniz");
// function tekCift(sayiniz) {
//     return sayimiz%2==0 ? `${sayiniz} cifttir` : `${sayiniz} tektir`;
//}

//! 2. Yontem = Function Expression (yaygin olan yontem):

const tekCift1=function (sayi) {
    return sayi%2==0 ? "CIFT" : "TEK";
}
console.log(tekCift1(5));

//Ornek2: 

let buyukBul=function(a,b,c) {
    
    let enBuyuk;

    if(a>b && a>c) {
        enBuyuk=a;
    } else if (b>c && b>a) {
        EnBuyuk=b;
    } else {
        enBuyuk=c;
    }
    return enBuyuk;
}
console.log(buyukBul(5,8,9));

//! 3. Yontem: Function Arrow (ok)

//const ciftMi=(sayi)=>(sayi%2==0 ? "cift" : "tek");
const ciftMi=(num) => (num%2==0 ? `${num}=Cift` : `${num}=Tek`);    //kisa yol
console.log("sayi " + ciftMi(7));

const taban= prompt("taban gir");
const us=prompt("us giriniz");

const usAl=(taban,us)=>taban**us;
console.log(usAl(taban,us));
