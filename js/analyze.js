function analyze(arr) {
  return {
    average: arr.reduce((a,b)=>a+b)/arr.length,
    min: arr.sort((a,b)=>a-b)[0],
    max:  arr.sort((a,b)=>b-a)[0],
    length: arr.length
    
  };
}


console.log(analyze([2, 1, 5]).length)
module.exports = analyze