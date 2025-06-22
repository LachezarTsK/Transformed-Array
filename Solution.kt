
class Solution {

    fun constructTransformedArray(input: IntArray): IntArray {
        val transformedArray = IntArray(input.size)
        for (i in input.indices) {
            val nextIndex = getNextIndex(i, input[i], input.size)
            transformedArray[i] = input[nextIndex]
        }
        return transformedArray
    }

    private fun getNextIndex(currentIndex: Int, steps: Int, numberOfElements: Int): Int {
        return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements
    }
}
