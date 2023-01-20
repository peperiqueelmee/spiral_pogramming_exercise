function spiralDiagonalSum(spiralSize) {
    if (!checkOddNumber(spiralSize)) return; //Only spirals with odd sizes are allowed

    let initValue = 1;
    let totalSumDiagonals = initValue; // Begin of spiral's central value
    let step = 2;

    for (let minValue = 3; minValue <= spiralSize; minValue += step) {
        let rightUpperCorner = minValue * minValue; // Calculate spiral's max value
        let upperLeftCorner = rightUpperCorner - (minValue - 1);
        let lowerLeftCorner = rightUpperCorner - 2 * (minValue - 1);
        let lowerRightCorner = rightUpperCorner - 3 * (minValue - 1);

        totalSumDiagonals += rightUpperCorner + upperLeftCorner + lowerLeftCorner + lowerRightCorner;
    }
    return totalSumDiagonals;
}

function checkOddNumber(num) {
    return num % 2 !== 0;
}

console.log(spiralDiagonalSum(5)); //Print 101
console.log(spiralDiagonalSum(1003)); // Print 673189025

