function calculator(op, numA, numB) {
    switch(op){
        case "+":
            return numA+ numB
            
        case "-":
            return numA- numB
            
        case "/":
            return numA /  numB
            
        case "*":
            return numA * numB
            
        default : 
            return "error has occured !"
    }
    
}

console.log(calculator('-', 0, 1))
module.exports = calculator