+++
title = "Kadane's algorithm"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["array", "dp"]
draft = false
weight = 2011
+++

<https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0>

DP without array

```cpp
class Solution {
public:
  int maxSubarraySum(int arr[], int n) {

    int sum = INT_MIN, currSum = 0, i = 0;

    while (i < n) {
      currSum += arr[i];
      sum = max(sum, currSum);

      if (currSum < 0)
        currSum = 0;
      i++;
    }
    return sum;
  }
};
```
