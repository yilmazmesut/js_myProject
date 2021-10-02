//! Nesneler

//diziler sirali bolgelidir.. dolayisiyla dizilere erisim index ile olur.
//eger diziler karisiksa(nesne) inddecle erisim goxlugu ortaya cikar. 
//Bu yuzden=

//! Object (Nesne)

//nesnelerde key-value (property-value) kullanilir
//nesnelerde aradigimiz variye erismek icin key adini kullanmamiz gerekir..

const insan= {
    ad:"Kenan",
    soyad:"Kul",
    yas:30,
    meslek:"developer",
    diller:["Lava","JS","SQL","HTML"]
};

console.log(insan);

//1) .dot notasyonu=
console.log(insan.ad);
console.log(insan.diller);

//2)
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adim ${insan.ad} ve yasim: ${insan.yas}`);

//const bilgi= prompt("insan nesnesinden hangisini gormek istersin - ad,soyad,yas..-");
//console.log(insan[bilgi]);

//objeye key.value lar ekleme
insan.konum= "Turkiye";
insan.email= "insan@hotmail.com"
insan["dogumTarihi"]= 1991;
console.log(insan);

//! Nesne Methodlari

//bugünün yılını al=> Date().getFullYear()
const kisi= {
    ad:"Merve",
    soyad:"Aslan",
    dogumTarihi: 1990,
    meslek: "tester",
    tool:"Selenyum",
    ehliyet: true,
    yasHesapla: function() {
        return new Date().getFullYear()-this.dogumTarihi;    
    },
    ozet: function() {  
        return ` ${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır`;   
    },
    //this ile= hangi {} in icinde ise o dogumTarihi'ni getirir.
    
};
console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

// Nesne(Object) iterasyon ornekleri

const people = [
    {
      ad: "hakan",
      soyad: "inal",
      meslek: "developer",
      yas: 41,
    },
  
    {
      ad: "said",
      soyad: "cin",
      meslek: "tester",
      yas: 37,
    },
    {
      ad: "kubilay",
      soyad: "tuncel",
      meslek: "team lead",
      yas: 33,
    },
  
    {
      ad: "osman",
      soyad: "Türker",
      meslek: "grafiker",
      yas: 29,
    },
    {
      ad: "hüseyin",
      soyad: "harran",
      meslek: "developer",
      yas: 32,
    }
  ];

console.log(people);

//ORNEK1: people dizisindeki kisilerin mesleklerini konsonda yaziniz
people.forEach((x) => console.log(x.meslek));

//SORU2: people dizisindeki tum kisilerin yaslarini 1 artirarak yaziniz
people.map((x)=> x.yas+1).forEach((x)=> console.log(x));

//SORU3: yasi 35 e esit olanlarin adlarini yazdir
people.filter((x)=> x.yas <=35).forEach((x)=>console.log(x.ad));

//SORU4: people dizisindeki kisilerin isimlerini buyuk harf yapan, yaslarini 5 artiran 
//ve soyadinin ilk iki harfini yazdiran fonksiyonu yazdirin

const degisiklik= people.map((x)=> {
    return{
        ad: x.ad.toUpperCase(),
        yas: x.yas+5,
        soyad: x.soyad.slice(0,2)
    };
}).forEach((x)=>console.log(x));


//SORU5:  mesleği developer olanların isimleri büyük harf yapıp ve yaslarını yazdırınız (isterseniz diziye atayıp diziyi yazdırınız)

const yeni= people.filter((x)=>x.meslek=="developer").map((x)=>{
    return {
        ad: x.ad.toUpperCase(),
        yas: x.yas,
    }
}

);
console.log(yeni);