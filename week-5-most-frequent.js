function sorting(arrNumber) {
    arrNumber.sort(function (value1, value2) {return value1 - value2})
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    let tempSort = sorting(arrNumber);
    let highest = 0;
    for(let i = 0; i < tempSort.length; i++){
        if(highest < tempSort[i]){
            highest = tempSort[i];
        }
    }
    let count = 0;
    for(let i = 0; i < tempSort.length; i++){
        if(tempSort[i] === highest){
            count++
        }
    }
    let listSort = `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${count} kali`;
    return listSort;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));