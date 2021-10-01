function uniqueOnly (word){

    let str = word

    for (let i = 0; i < str.length; i++){
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
            return false
        } else {
            return true
        }
    }
}
   
console.log(uniqueOnly('bob'))