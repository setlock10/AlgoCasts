function reverse(str) {
    
    return str.split('').reduce((x, y)=>y + x,'');
}

reverse('abdce')

module.exports = reverse;
