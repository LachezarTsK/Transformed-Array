
function constructTransformedArray(input: number[]): number[] {
    const transformedArray: number[] = new Array(input.length);
    for (let i = 0; i < input.length; ++i) {
        const nextIndex = getNextIndex(i, input[i], input.length);
        transformedArray[i] = input[nextIndex];
    }
    return transformedArray;
};

function getNextIndex(currentIndex: number, steps: number, numberOfElements: number): number {
    return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements;
}
