function caesar(str,num) {
    let result = ""
    const reg = /[!,]/g
    if(num > 26){
        num = num % 26
    }
    for(let i = 0; i<str.length;i++){
        
        if(reg.exec(str[i])){
            result = result+ str[i]
        }
        else if( str[i] == " ")
            result = result + str[i]
        else{
            
            if(str[i].charCodeAt(0)>= 97 &&str[i].charCodeAt(0)<= 122 ){
                let charCode = str[i].charCodeAt(0)+num
                if(charCode>122){
                    charCode = 96+(charCode-122)
                }
                if(charCode < 97){
                    charCode = 122 - (96- charCode)
                }
                result = result + String.fromCharCode(charCode)
            }else{
              
                let charCode = str[i].charCodeAt(0)+num
                if(charCode>90){
                    charCode = 64+(charCode-90)
                }
                if(charCode <65 ){
                    charCode = 90 - (64-charCode)
                }
                result = result + String.fromCharCode(charCode)
            }
        }
        }
        return result
}


module.exports = caesar;
