
// hasOddNumber
function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }
//hasAZero
function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }
function hasOnlyOddNumbers(num) {
    return num.every(function(val){
        return val % 2 !== 0;
    })
}
function hasNoDuplicates(num) {
    return num.every(function(val){
        return num.indexOf(val) === num.lastIndexOf(val);
        });
}
function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }
function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
}
  

