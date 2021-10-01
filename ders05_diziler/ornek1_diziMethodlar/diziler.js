const yaslar=[5, 10, 28, 42];

const isimler=["Hakan", "Alaaddin", "Furkan", "Dayanch",20, 40, true, 23.5, yaslar];    // list'in icine birsok data turunden eleman ekleyebiliriz

console.log(isimler);   // log ile isimler dizisimim tum elemanlarini yazdirabiliriz

console.log(isimler[3]);   // 3.indexteki elemani yazdirabiliriz

isimler[3]="Sadi";  // Elemanlari degistirebiliriz
console.log(isimler);   

// const degistirilemez ama non-primitive'lerden array'lar degistirilebilir. cunku dizi bir adres gosterir, isimler gibi, bu yuzden primitive'den farklidir.

isimler[isimler.length-2]=false;
console.log(isimler);

console.log(isimler[8]);    //istedigimiz elemani yazdirabiliriz.
console.log(isimler[8][1]); //ic ice list'lerden istedigimiz eleman'i yazdirabiliriz. 

//!                 DIZIYI DEGISTIREN METHODLAR

let meyveler= ["Elma","Armut","Muz","Kivi"];
const baslik= document.querySelector(".baslik");
baslik.textContent=meyveler;
console.log(meyveler);

//! pop()=>       en sonki elemani siler. log icinde yazdirirsak sildigini yazdirir.

//meyveler.pop();
console.log(meyveler.pop());

//! shift() ==> dizinin 0 indexli elemanini yani ilk elemanini siler. log icinde yazdirirsak sildigi elemani yazdirir.

//meyveler.shift();
console.log(meyveler.shift());

//! push() ==> dizinin sonuna eleman ekler

//meyveler.push("Cilek","Karpuz")

//! unshift() ==> dizinin 0. index'ine yani en basina eleman ekler

meyveler.unshift("Ayva");

//! sort ==> diziyi yukselen siraya (natural order) gore siralar

meyveler.sort();

//! reverse() ==> dizinin elemanlarini index'ine gore ters siralar

console.log(meyveler.reverse());

//! splice() ==> 0 ile silmeden, 1 ile silerek ekler

meyveler.splice(1,0,"erik");    // 1. index'e "erik" ekle, eski elemani silme saga kaydir
//             (index, silmeden ekle, eklenecek eleman)

meyveler.splice(4,1,"uzum");    // 4. index'e "uzum" ekle, eski elemani sil
//             (index, silerek)



console.log(meyveler);

//!             DIZI ERISIM METHODLARI (diziyi degistirmez)

const sayilar= [3,4,5,2,"2","uc","bes",5,2];

//! includes() ==> kapsiyor mu?
console.log(sayilar.includes("5")); //false --> cunku sayilar dizisinde cift tirnakli bir 5 eleman yok.
console.log(sayilar.includes(5));   //true

//! indexOf() ==> icindeki elemanla ilk eslesen index'i dondurur
console.log(sayilar.indexOf(2));

//!

sayilar.indexOf(2,4);   // 4. index'ten itibaren ilk buldugun 2 nin index'ini getir

​
console.log(sayılar.lastIndexOf(5));
​
console.log(sayılar.indexOf(2,4)); //8  ikinci 2 yi döndürür (4. indexten sonra aramaya baslar)
console.log(sayılar.indexOf(5,3)); // 7



console.log(sayilar);



//! join() ==> dizinin tum elemanlarini birlestirip tek bir string haline getirir
console.log(sayilar.join(" ")) // default olarak (,)virgul ile elemanlari ayirir. istersek ("-") farkli isaretlerle de ayirabiliriz

//! toString() ==> join gibidir, ancak bu sadece virgulle ayirir
console.log(sayilar.toString());



//------------------------------------------------------------------------------------

const arabalar=["bmw","mercedes","Volvo","sahin","anadol"];

//! slice() ==> di
arabalar.slice(2);  // 2. index'ten sonraki elemanlari getirir
arabalar.slice(1,3);  // 1 ile 3. index arasindaki elemanlari getirir (3 dahil degil)

//! concat()
const birlesik= sayilar.concat(arabalar);
console.log(birlesik);

birlesik.concat(arabalar, true, false, [3,4,5], meyveler);  // iki listeyi birlestirken, istedigimiz elemanlari da ekleyebilirz.