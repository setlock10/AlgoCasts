// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//  for n letters in string
//      n[n] <- n[0]

function reverse(str) {
    let newstr = []
    for (i=str.length;i>0;i--){
        //console.log(str[i-1], str.length-i)
        newstr[str.length-i]=str[i-1]
    }
    
    return newstr.join('');


    
}

module.exports = reverse;
