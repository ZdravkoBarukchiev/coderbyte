function FindIntersection(strArr) {
    let firstArr = strArr.shift().split(', ')
    let secondArr = strArr.shift().split(', ')
    let result = []
    for (el of firstArr) {
        for (element of secondArr) {
            if (el == element) {
                result.push(element)
            }
        }
    }
    if (result.length > 0) {
        return result.join(',')
    }
    return false
}