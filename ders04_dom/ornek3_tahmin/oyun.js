// Math class'indan bilgisayara 1-20 arasinda bir sayi tuttur.

let rastgeleSayi= Math.floor(Math.random()*20+1);   //normalde random 0-0.99999.. arasinda bir sayi tutar. biz 30 istedigimiz icin 20 ile carparim.
let puanPc= 10;
let rekorPc=0;

//her kontrol et butonuna tiklandiginda;
document.querySelector(".kontrol").onclick= function(){
    
    const tahmin= document.querySelector(".tahmin").value;

    if (tahmin==rastgeleSayi) {    // eger kullanici tahmini dogruysa=
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".question").textContent= rastgeleSayi;
        document.querySelector(".mesaj").textContent= "Tebrikler Bildiniz!! 😉";
        
        if (puanPc>rekorPc) {    // rekoru guncelleme
            rekorPc=puanPc;
            document.querySelector(".rekor-skor").textContent= puanPc;
        }

    } else {    // kullanicinin tahmini dogru degilse=

        if (puanPc>1) {
            puanPc--;
            let mesaj= document.querySelector(".mesaj");
            tahmin < rastgeleSayi ? (mesaj.textContent= "Sayiyi artirin🔼") : (mesaj.textContent="Sayiyi azaltin🔻"); 
            document.querySelector(".skor").textContent= puanPc;
        } else {
            document.querySelector(".mesaj").textContent="Oyunu kaybettiniz 😔";
            document.querySelector(".skor").textContent=0;
            document.querySelector("body").style.backgroundColor="red";
        }
    }




 //tekrar butonuna basıldığında baslangıc degerleri yüklensin
    document.querySelector(".tekrar").onclick=()=>{
        rastgeleSayi = Math.floor(Math.random() * 20 + 1);
        document.querySelector("body").style.backgroundColor = "#2d3436";
        document.querySelector(".question").textContent="?";
        document.querySelector(".mesaj").textContent="Tahmine Baslanıyor!!";
        puanPc=10;
        document.querySelector(".skor").textContent=puanPc;
        document.querySelector(".tahmin").value=" ";
    }
    // klavyeden bir tusa basıldığında calıs
    
    document.querySelector(".tahmin").onkeydown=function (olay){
        if(olay.keyCode==13){
            document.querySelector(".kontrol").onclick();
        }
        if(olay.keyCode==82){
            document.querySelector(".tekrar").onclick();
        }
    }
    
}
