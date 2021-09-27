// Ara butonuna tiklandiginda calan telefon ciksin ve zil calsin
let resim =document.querySelector(".resim"); //resim e ulaştım
let ring =document.querySelector(".ses"); //audio ya ulaştım 
//ara butonuna ulaştım
document.querySelector(".on").onclick=function(){ //ara butonuna ulastim
resim.src="./img/img.gif";//gif'i degistirdim. tiklandiginda gif'i calistiracak
ring.play(); //ses'i calistirdim
}
//? baglat butonuna basınca gif gelsin ses kesilsin

//baglat butonunu cagırdık
document.querySelector(".off").onclick=function(){  //baglat butouna basinca ses kesilsin baglat gif'i calisacak
  resim.src = "./img/telbagla.gif";
  ring.pause();
} //tel sesini susturduk

//? konus butona basınca yeni gif gelsin 
//konus butonuna ulaştık
document.querySelector(".speak").onclick=function() {   //konus butonuna basinca yeni gif ile degissin
resim.src="./img/telfirlat.gif";  //resmi yeni gif ile degistirdik
}
//?ekle butonuna basıldığında yeni bir li ekle upuzun yol
 // // yeni girilen satiri saklamak icin bir li olusturduk.
 //  // const yeniLi = document.createElement("li");
 //  // yeni li icin textnode olusturduk
 //  // const textNode = document.createTextNode(satir.value);
 //  //olusturdugumuz texnode'u yeni li'ye bagladik.
 //  // yeniLi.appendChild(textNode);
 //  // yeni eklenen satiri var olan listeye (ul) baglayalim.
 //  // liste.appendChild(yeniLi);

 //kısa yol: //ekle butonuna basildiginda yeni bir <li> ekle: (kestirme yol):
 const liste = document.querySelector(".liste"); // dillerin girili olduğu listeye ulaştık
 // ekle butonuna ulaştık
 document.querySelector(".ekle").onclick=function() {    // ekle butonuna ulaştık
    const giris=document.querySelector(".dil"); //dil girişi yapılan inputa ulaştık
    liste.innerHTML=liste.innerHTML+ `<li>${giris.value}</li>`; //listeye inputa girilen değerleri liste olarak ekledik
    giris.value="";  //inputa girilen değeri ekleyince inputtan silinmesi içinkestirme yol, hocanin buldugu..
 }

 //?sil butonuna tıklandığında li elemanı silinsin
//sil butonuna ulaştık
   document.querySelector(".sil").onclick=function() {  //sil butonuna ulastik
liste.removeChild(liste.lastElementChild); //listenin çocuklarından listenin son çocuğunu sildik
  }

const parag=document.querySelector(".forH1");
parag.innerHTML=`<h1>${"Programlama Dilleri"}</h1>`;    //uzun yoldan js icerisinden veri girisi yaptik



//soru: klavyeden bir tusa basildiginda buyusun/kuculsun
document.querySelector(".textbox").onkeyup=function (){
   const checkbox= document.querySelector(".checkbox");
   const textbox= document.querySelector(".textbox");
    
   if(checkbox.checked) {
        textbox.value=textbox.value.toUpperCase();

   }else {
        textbox.value = textbox.value.toLowerCase();
   }

}
  
//mouse resmin üstüne geldiğinde aslan kükresin 
resim.onmouseover=function () {
resim.src="./img/aslan2.jpeg";
}

 //2. yol: addEventListener() ile cozum: (gicik bir yol)
// resim.addEventListener("mouseout",function(){
//     resim.src=".img/aslan2.jpeg";
// })


//mouse resmin üstünden çekildiğinde
resim.onmouseout= function () {
    resim.src="./img/aslan1.jpeg";

}

//soru: klavyede enter'e bastigimizda aslan resmini eklesin, delete'ye bastigimizda silsin.
// onkeydown - 
// keycode ==> enter=13, delete=46

document.querySelector(".dil").onkeydown=function(klavye) { 

    if( klavye.keyCode==13    ) { // enter ı çağırdık
        document.querySelector(".ekle").onclick();

    }if (klavye.keyCode==46) { //delete yi çağırdık 
        document.querySelector(".sil").onclick();
    }
};
