// Module Levenshtein-Distance
const levenshteinDistance = (fromString, toString) => {
    // for all y and x in matrix[y,x] will hold the Levenshtein distance between
    // the first y characters of toString and the first x characters of fromString
    // initialize the whole matrix with 0
    var arrX = [0].concat(fromString.toLowerCase().trim().split(''))
    var arrY = [0].concat(toString.toLowerCase().trim().split(''))
    var matrix = Array(toString.length + 1).fill().map(function () {
        return Array(fromString.length + 1).fill(0)
    });
    // initialize the Y-and X-axis of the matrix with index number
    var y = 0;
    var x = 0;
    while (x < arrX.length) {
        matrix[0][x] = x
        x++
    }
    while (y < arrY.length) {
        matrix[y][0] = y
        y++
    }
    // calculate the distance based on the minimal movement of deletion, insertion or subsitution
    for (y = 1; y < arrY.length; y++) {
        for (x = 1; x < arrX.length; x++) {
            var deletionCost = matrix[y][x - 1] + 1
            var insertionCost = matrix[y - 1][x] + 1
            var substitutionCost = arrY[y] == arrX[x] ? 0 : 1
            matrix[y][x] = Math.min(deletionCost, insertionCost, +substitutionCost + matrix[y - 1][x - 1])
        }
    }
    return matrix[arrY.length - 1][arrX.length - 1]
}

export { levenshteinDistance as default }