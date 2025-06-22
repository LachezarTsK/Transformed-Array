
package main

func constructTransformedArray(input []int) []int {
    transformedArray := make([]int, len(input))
    for i := range input {
        nextIndex := getNextIndex(i, input[i], len(input))
        transformedArray[i] = input[nextIndex]
    }
    return transformedArray
}

func getNextIndex(currentIndex int, steps int, numberOfElements int) int {
    return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements
}
