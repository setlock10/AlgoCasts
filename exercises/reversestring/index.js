// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    
    return str.split('').reduce((x, y)=>{ 
        console.log(y+x);
        return (y + x);
    },'');
}


module.exports = reverse;
