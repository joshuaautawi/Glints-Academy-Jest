function reverse(str) {
 
    return str.split("").reverse().filter(e=>e!=",").join("")

}
console.log(reverse('pi nk'))
module.exports = reverse;
