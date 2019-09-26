function kaliTerusRekursif(angka) {
    let result = angka.toString();
    if(result.length === 1){
        return result;
    } else {
        let temp = 1;
        for(let i = 0; i < result.length; i++){
            temp *= parseInt(result[i]);
        }
        return kaliTerusRekursif(temp);
    }
}
  
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6