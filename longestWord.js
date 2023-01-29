function LongestWord(sen) {
    let arr = sen.split(' ')
    let word = ''
    for (el of arr) {
        if (el.length > word.length) {
            word = el
        }
    }
    return word;

}