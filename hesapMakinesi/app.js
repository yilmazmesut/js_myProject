function hesapEt(sonuc) {
    if (form.displayResult.value==0) {  // sifir yazdigimizda uzerine yazdirmak icin
        form.displayResult.value=sonuc; 
    } else {

    }
    form.displayResult.value+=sonuc;
}
document.querySelector(".bos").onclick= function () {
    document.querySelectorAll(".ekranBorder").value="";
    
}