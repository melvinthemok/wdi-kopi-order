var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What drink order would you like translated? E.g.: Teh o ping siew dai / Kopi si gah dai / Kopi o kosong gao? ', function (answer) {
  console.log('OK boss/auntie/uncle/boy/girl, you ordered:')
  answer = answer.toLowerCase()
  console.log(answer)
  if (answer.includes('gao')) {
    console.log('concentrated')
  } else if (answer.includes(' po')) {
    console.log('diluted')
  }
  if (answer.includes('ping' || 'ice')) {
    console.log('iced')
  }
  if (answer.includes('tarik')) {
    console.log('pulled')
  }
  if (answer.includes('teh')) {
    console.log('tea')
  } else if (answer.includes('kopi')) {
    console.log('coffee')
  } else if (answer.includes('milo')) {
    console.log('hot chocolate')
  } else if (answer.includes('horlick')) {
    console.log('malt drink')
  } else if (answer.includes('barley')) {
    console.log('barley')
  } else if (answer.includes('bandung')) {
    console.log('rose syrup')
  } else if (answer.includes('kickapoo')) {
    console.log('citrus-flavoured drink coming right up')
  }
  if (answer.includes(' o')) {
    console.log('without milk')
  } else if (answer.includes(' si')) {
    console.log('with evaporated milk')
  }
  if (answer.includes('limau')) {
    console.log('with lime')
  }
  if (answer.includes('gah dai')) {
    console.log('more sugar')
  } else if (answer.includes('siew dai')) {
    console.log('less sugar')
  } else if (answer.includes('kosong')) {
    console.log('without sugar')
  }
  if (answer.includes('halia')) {
    console.log('with ginger')
  }
  rl.close()
})
