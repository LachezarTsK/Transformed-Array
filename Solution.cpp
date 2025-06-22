
#include <vector>
using namespace std;

class Solution {

public:
    vector<int> constructTransformedArray(const vector<int>& input) const {
        vector<int> transformedArray(input.size());
        for (int i = 0; i < input.size(); ++i) {
            int nextIndex = getNextIndex(i, input[i], input.size());
            transformedArray[i] = input[nextIndex];
        }
        return transformedArray;
    }

private:
    int getNextIndex(int currentIndex, int steps, int numberOfElements) const {
        return (numberOfElements + (steps % numberOfElements) + currentIndex) % numberOfElements;
    }
};
