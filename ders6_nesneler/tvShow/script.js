var showListe=[];

//! .jison dosyasindan veri getirme asamalari:

fetch("./tv-shows.json").then((cevap)=>cevap.json()).then((veri)=>{
showListe=veri;

showIzle(showListe);    //method call

});

// method olusturma:
function showIzle(showListe) {
    var liste= document.querySelector(".liste");
    showListe.forEach((a)=>{
        liste.innerHTML=liste.innerHTML+`<div class="card col-md-3" >
        <img class="card-img-top" src=${a.show.image.medium} alt="Card image cap">
        <div class="card-body">
          <h5>${a.show.name}</h5>
          <a href=${a.show.url} target="_blank" class="btn btn-success">Detaylar</a>
        </div>
      </div>`;
    });
    // buradan kodlari kopyaladik, `` icine yerlestirdik: https://getbootstrap.com/docs/4.0/components/card/
}