+++
title = "Sort array according to count of set bits"
author = ["Seshal Jain"]
tags = ["search-sort"]
categories = ["done"]
draft = false
weight = 2101
+++

<https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0>

```cpp
class Solution {
public:
  int findSetBits(int n) {
    int bCount = 0;

    while (n != 0) {
      n &= (n - 1);
      bCount++;
    }

    return bCount;
  }

  void sortBySetBitCount(int arr[], int n) {
    stable_sort(arr, arr + n, [&](int a, int b) -> bool {
      return findSetBits(a) > findSetBits(b);
    });
  }
};
```
