
public class Solution {

    public int[] constructTransformedArray(int[] input) {
        int[] transformedArray = new int[input.length];
        for (int i = 0; i < input.length; ++i) {
            int nextIndex = getNextIndex(i, input[i], input.length);
            transformedArray[i] = input[nextIndex];
        }
        return transformedArray;
    }

    private int getNextIndex(int currentIndex, int steps, int numberOfElements) {
        return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements;
    }
}
