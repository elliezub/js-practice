function highAndLow(numbers){
  let nums = numbers.split(' ').map(Number)
  
  let min = Math.min(...nums)
  let max = Math.max(...nums)
  return max + ' ' + min
}

console.log(highAndLow("5345345 2 3 765"))
