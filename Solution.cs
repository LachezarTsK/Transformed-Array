
using System;

public class Solution
{
    public int[] ConstructTransformedArray(int[] input)
    {
        int[] transformedArray = new int[input.Length];
        for (int i = 0; i < input.Length; ++i)
        {
            int nextIndex = GetNextIndex(i, input[i], input.Length);
            transformedArray[i] = input[nextIndex];
        }
        return transformedArray;
    }

    private int GetNextIndex(int currentIndex, int steps, int numberOfElements)
    {
        return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements;
    }
}
