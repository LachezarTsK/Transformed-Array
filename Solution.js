
/**
 * @param {number[]} input
 * @return {number[]}
 */
var constructTransformedArray = function (input) {
    const transformedArray = new Array(input.length);
    for (let i = 0; i < input.length; ++i) {
        const nextIndex = getNextIndex(i, input[i], input.length);
        transformedArray[i] = input[nextIndex];
    }
    return transformedArray;
};

/**
 * @param {number} currentIndex
 * @param {number} steps
 * @param {number} numberOfElements
 * @return {number}
 */
function getNextIndex(currentIndex, steps, numberOfElements) {
    return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements;
}
