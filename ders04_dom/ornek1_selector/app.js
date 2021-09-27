
//*********** getElementById ******************

const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width="100px";
buton.style.color="red";
buton.style.fontSize="18px";

buton.textContent="ARA";    //! textContent= sadece tag'lerin icerigini degistirmek istersek inner yerine bunu kullanabiliriz


//******* getElementsByTagName **********

const resim = document.getElementsByTagName ("img");
resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="3px solid red";


//********** getElementsByClassName *************** (bu kullanim cok tercih edilmiyor.)

const baslik = document.getElementsByClassName("H1");
baslik[0].style.textAlign="center";

//********* QuerySelector **************  (en cok kullanilan cagirma yolu)
document.querySelector(".mytitle").textContent="DOM SELECTOR KAVRAMI😉";    // clas ismini . ile cagiririz
document.querySelector("#govde").style.backgroundImage="linear-gradient(green,blue,pink)";   // id'sini # ile cagiririz.

//********** EVENT******************** */
// (onmouseover, onmouseout   )

const h=document.querySelector(".H1");
h.onmouseover=function () {
    h.style.color="red";
    h.style.backgroundColor="white";
}

h.onmouseout=function () {
    h.style.color="pink";
    h.style.backgroundColor="yellow";
}

//Ornek: 1.resime tikladiginizda img'ler yer degistrsin
document.querySelector(".bir").onclick=function() {
    document.querySelector(".bir").src="./img/logo2.png";
    document.querySelector(".iki").src="./img/js_logo.png";
}
