module.exports = function towelSort(matrix) {
    if (matrix == null || matrix.length === 0) {
        return [];
    }

    for (let i=1; i <= matrix.length-1; i+=2) {
        matrix[i].reverse();
    }

    return matrix.reduce(function (prev, next) {
        return prev.concat(next);
    });
}
