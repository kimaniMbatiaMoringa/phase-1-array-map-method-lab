const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
 let tutorials2 = tutorials.map(function(arrItem){
    let sentenceBrokenIntoWordsArray = arrItem.split(" ")                                       //Splits each sentence elements into individual words

    let wordsStartWithUpperCase = sentenceBrokenIntoWordsArray.map(function(word){              //splits subarray into individual words                                                            
     let word2 = word.charAt(0).toUpperCase() + word.substring(1, word.length)                     //Makes That word start with an uppercase letter, then adds the rest of the letters to the word
      //console.log(word2)
      return word2
    })
    console.log(wordsStartWithUpperCase.join(' '))
    let upperCasedSentence =wordsStartWithUpperCase.join(' ')
    return upperCasedSentence
  })

return tutorials2
  



/*   console.log(tutorials2)
  return tutorials */
}

/* function firstLetterToUpperCase(arrayItem){
  return arrayItem + " BASED"
}

tutorials2 = tutorials.map(function(arrItem){
   return arrItem.charAt(0).toUpperCase() + arrItem.substring(1)
})

console.log(tutorials2)
 */
console.log(titleCased())
/* 
let sentenceBrokenIntoWordsArray = titleCased()
 console.log(sentenceBrokenIntoWordsArray)


  let upperCasedWords = sentenceBrokenIntoWordsArray.forEach(function(word){                     //For Every object in array

    let wordsStartWithUpperCase = word.map(function(word){                                       //splits subarray into individual words                                                            
      word2 = word.charAt(0).toUpperCase() + word.substring(1, word.length)                     //Makes That word start with an uppercase letter, then adds the rest of the letters to the word
      //console.log(word2)
      return word2
    })

    console.log(wordsStartWithUpperCase.join(' '))
    let upperCasedSentence =wordsStartWithUpperCase.join(' ')

    tutorials.push(upperCasedSentence)

    return upperCasedSentence
  })

//console.log(tutorials)
console.log(tutorials)
 */

//get the first word in that array map it to upper case
//
