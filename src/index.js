module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let a =[]
    matrix.forEach((item, i) => (i % 2) ? a.push(...(item.reverse())) : a.push(...item))
    return a
};
