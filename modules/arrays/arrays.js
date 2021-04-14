const orderedIntegers = (from, to) => {
    return Array(to - from + 1).fill().map((_, index) => from + index)
}

const shuffledIntergers = (from, to) => {
    const numbers = orderedIntegers(from, to)
    for (let i = numbers.length - 1; i > 0; i--) {
        const targetIndex = Math.floor(Math.random() * (i + 1))
        [numbers[i], numbers[targetIndex]] = [numbers[targetIndex], numbers[i]]
    }
    return numbers
}

const convert2DMatrix = (array) => {
    const sidelength = Math.sqrt(array.length)
    // exclude cases if square root is not an positive integer
    if (!sidelength || !Number.isInteger(sidelength) || sidelength < 1) { return null }
    const matrix = []
    for (let i = 0, l = array.length; i < l; i += sidelength) {
        matrix.push(array.slice(i, i + sidelength))
    }
    return matrix
}

export { orderedIntegers, shuffledIntergers, convert2DMatrix }