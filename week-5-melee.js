function meleeRangedGrouping (str) {
    if(str.length === 0){
        return '[]'
    }
    let type = ['Ranged', 'Melee'];
    let arrStr = [];
    let temp = '';
    for(let i = 0; i < str.length; i++){
        let checkStr = true;
        if(str[i] === '-' || str[i] === ','){
            checkStr = false;
        }
        if(checkStr === true){
            temp += str[i];
        }
        if(str[i] === '-' || str[i] === ',' || i === str.length - 1){
            arrStr.push(temp);
            temp = '';
        }
    }
    let multiArr = [];
    for(let i = 0; i < type.length; i++){
        let arr = [];
        for(let j = 0; j < arrStr.length; j++){
            if(type[i] === arrStr[j]){
                arr.push(arrStr[j - 1]);
            }
        }
        multiArr.push(arr);
    }
    return multiArr;
  }
  
  // TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []