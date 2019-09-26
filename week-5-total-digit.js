function totalDigitRekursif(angka) {
    let temp = angka.toString();
    let tempArr = temp.split('');
    if(tempArr.length === 1){
        return parseInt(tempArr.shift());
    } else {
        return parseInt(tempArr.shift()) + totalDigitRekursif(parseInt(tempArr.join('')));
    }
}
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5