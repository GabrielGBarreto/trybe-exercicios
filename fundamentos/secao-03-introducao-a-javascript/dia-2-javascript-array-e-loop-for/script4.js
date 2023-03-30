let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log (numbers)

 //let soma = 0
 //for (let index = 0; index < numbers.length; index += 1) {
     //soma += numbers[index] 
    // }
    // soma = soma / numbers.length
    // if(soma > 20) {
        // console.log('valor maior que 20')
    // } else {console.log('valor menor que 20')}

// console.log (soma)

// console.log (soma / numbers.length)





// let higherNumber = numbers[0]
// for (let index = 1; index < numbers.length; index += 1) {
    // if (numbers[index] > higherNumber)
   //  higherNumber = numbers[index];
// }
// console.log(higherNumber)





 //let result = 0
 //for (let index = 0; index < numbers.length; index += 1){
     //if (numbers[index] % 2 !== 0) {
         //result += 1
    //}
//}
 //if (result === 0){
     //console.log('nenhum valor ímpar encontrado')
 //} else {console.log(result)}




  //let smallestNumber = numbers[0]

  //for (let index = 1; index < numbers.length; index += 1){
     //if (numbers[index] < smallestNumber)
     //smallestNumber = numbers[index]
  //}
  //console.log(smallestNumber)





   //let number = []
   //for(let index = 1; index <= 25; index +=1){
    // number.push(index)
   //}
 //console.log(number)

   //for(let index2 = 0; index2 < number.length; index2 += 1){
    // console.log(numbers[index2] / 2)
  // }





   //let fatorial = 1;

 //for (let index = 10; index > 0; index -= 1) {
   //fatorial *= index;
 //}

 //console.log(fatorial);




  //let word = 'tryber'
  //let reverseWord = ''
 
  //for(let index = 0; index < word.length; index += 1){
     //reverseWord += word[word.length - 1 - index];
  //}
  //console.log(reverseWord)





  let array = ['java', 'javascript', 'python', 'html', 'css'];

  biggestWord = array[0]
  smallestWord = array[0]

  for(let index = 1; index < array.length; index += 1){
    if(array[index].length > biggestWord.length)
    biggestWord = array[index]
  }

  for(let index2 =1; index2 < array.length; index2 += 1){
    if(array[index2].length < smallestWord.length)
    smallestWord = array[index2]
  }

  console.log(biggestWord)
  console.log(smallestWord)