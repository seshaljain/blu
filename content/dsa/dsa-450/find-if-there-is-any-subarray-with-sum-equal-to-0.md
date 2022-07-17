+++
title = "Find if there is any subarray with sum equal to 0"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["array"]
draft = false
weight = 2019
+++

<https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0>

```cpp
class Solution {
public:
  bool subArrayExists(int arr[], int n) {
    int pSum[n];
    partial_sum(arr, arr + n, pSum);

    set<int> st;

    for (int i = 0; i < n; i++) {
      if (pSum[i] == 0 || st.find(pSum[i]) != st.end())
        return true;
      st.insert(pSum[i]);
    }

    return false;
  }
};
```
