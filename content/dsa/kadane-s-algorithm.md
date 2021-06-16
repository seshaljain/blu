+++
title = "Kadane's algorithm"
author = ["Seshal Jain"]
tags = ["done", "array", "dp"]
draft = false
weight = 2012
+++

<https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0>

DP without array

```cpp
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
```
