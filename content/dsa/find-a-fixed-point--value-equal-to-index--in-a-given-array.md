+++
title = "Find a fixed point (value equal to index) in a given array"
author = ["Seshal Jain"]
date = 2021-06-20T00:00:00+05:30
tags = ["search-sort"]
categories = ["done"]
draft = false
weight = 2086
+++

<https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1>

GfG testcases are incorrect, we can only use binay search on a sorted array

```cpp
class Solution {
  vector<int> v;

public:
  vector<int> valueEqualToIndex(int arr[], int n) {
    int low = 0, high = n - 1;
    while (low <= high) {
      int mid = (low + high) / 2; // low + (high - low)/2;
      if (mid == arr[mid + 1])
        v.push_back(mid);
      if (mid > arr[mid + 1])
        low = mid + 1;
      else
        high = mid - 1;
    }
    return v;
  }
};
```
