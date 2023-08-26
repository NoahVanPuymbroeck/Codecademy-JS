const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for(let i = 0; i<input.length; i++){
  for(let o = 0; o<vowels.length; o++){
    if(input[i]===vowels[o]){
      if(input[i]==="e"||input[i]==="u"){
        resultArray.push(vowels[o], vowels[o])
      }
      else{
        resultArray.push(vowels[o]);
      }
  }
}
}
console.log(resultArray);
const resultString = resultArray.join('');
console.log(resultString.toUpperCase());
