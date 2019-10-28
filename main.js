function isEvenlyDivisible(num1, num2) {
  if(num1 === num2 % 2){
    num2 = num1 + num1;
    return true
  } 
   else{
   
 }
  return false
}

function halfSquare(num) {
 return (num * num) /2; 
}

function isLong(str) {
  if (str.length >=14) {
    return true
  } else{
    return false
  }
}

function exclaim(str) {
  const newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = str.length + '!';
  }
  return newStr
}

function countWords(str) {
  let strCount = 1
  for (let i = 0; i < str.length; i++) {
    if (str.includes(' ')) {
      let strCount = strCount + 1;
    } else {
      return strCount
    }
  }
}

function containsDigit(str) {
  let newStr = '';
  if (str.containsDigit) {
    newStr = newStr + str;
  } else if (str.containsNonAlphanumeric) {
    newStr = newStr + str;
  } else {newStr = ''}
  return true
}


function containsLowerCase(str) {
 if (str.containsUpperCase) {
}
return true
}

function containsUpperCase(str) {
  if (str.containsUpperCase) {

  }
  return true
}

function containsNonAlphanumeric(str) {
}

function containsSpace(str) {
  let newStr = ''
  for (let i=0;i<str.length;i++){
    if (str.includes('')) {
      newStr = newStr + str
    } else if (str.includes('abcdefghijklmnopqrstuvwxyz')) {

    }
  }
  
  return true

}

function digits(str) {

}

function truncate(str) {
  str.slice(3,8)
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}