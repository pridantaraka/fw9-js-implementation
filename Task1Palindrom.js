function kata(teks) {
    let hasil = "";
    let x = teks.length-1;
    while(x>=0){
        hasil = hasil + teks[x]
        x=x-1
    }if(hasil != teks){
        console.log("Not a Palindrom");
    }else{
        console.log("Palindrom");
    }return hasil;
}

console.log(kata('malam'));