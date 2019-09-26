function changeVocals (str) {
    let vocals = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    let strArr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i]  !== ' '){
            strArr.push(str[i]);
        }
    }
    for(let i = 0; i < vocals.length; i++){
        for(let j = 0; j < strArr.length; j++){
            if(vocals[i] === strArr[j]){
                temp = strArr[j].charCodeAt();
                temp++
                strArr[j] = String.fromCharCode(temp)
            }
        }
    }
    return strArr;
  }
  
  function reverseWord (str) {
    let strArr = changeVocals(str);
    // console.log(strArr);
    let reverse = '';
    for(let i = strArr.length - 1; i >= 0; i--){
        reverse += strArr[i];
    }
    return reverse;
  }
  
  function setLowerUpperCase (str) {
    let lowUp = reverseWord(str);
    let lowUpArr = lowUp.split('');
    for(let i = 0; i < lowUpArr.length; i++){
        if(lowUpArr[i] === lowUpArr[i].toUpperCase()){
            lowUpArr[i] = lowUpArr[i].toLowerCase();
        } else {
            lowUpArr[i] = lowUpArr[i].toUpperCase();
        }
    }
    return lowUpArr;
  }
  
  function removeSpaces (str) {
    let removes = reverseWord(str);
    let result = '';
    for(let i = 0; i < removes.length; i++){
        result += removes[i];
    }
    return result;
  }
  
  function passwordGenerator (name) {
    let change = changeVocals(name);
    let reverse = reverseWord(change);
    let lowUp = setLowerUpperCase(reverse);
    let removes = removeSpaces(lowUp);
    if(removes.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        return removes;
    }
  } 

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'