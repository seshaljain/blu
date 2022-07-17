+++
title = "Find all pairs on integer array whose sum is equal to K"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2016
+++

<https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1>

```cpp
class Solution {
public:
  int getPairsCount(int arr[], int n, int k) {
    map<int, int> mp;

    for (int i = 0; i < n; i++)
      mp[arr[i]]++;

    int ctr = 0;

    for (int i = 0; i < n; i++) {
      ctr += mp[k - arr[i]];

      if (k - arr[i] == arr[i])
        ctr--;
    }

    return ctr / 2;
  }
};
```
