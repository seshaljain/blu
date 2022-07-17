+++
title = "Minimum number of jumps to reach end of an array"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2009
+++

<https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0>

```cpp
class Solution {
public:
    int minJumps(int arr[], int n) {
        int jumps = 0;
        int currJumpEnd = 0;
        int maxReachableIndex = 0;

        for (int i = 0; i < n; i++) {
            if (i == n - 1)
                return (currJumpEnd >= n - 1) ? jumps : -1;

            maxReachableIndex = max(maxReachableIndex, i + arr[i]);
            if (i == currJumpEnd) {
                jumps++;
                currJumpEnd = maxReachableIndex;
            }
        }

        return -1;
    }
};
```
