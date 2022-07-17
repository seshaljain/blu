+++
title = "Merge 2 sorted arrays"
author = ["Seshal Jain"]
tags = ["array", "search-sort"]
draft = true
weight = 2096
+++

<https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1>

```cpp
class Solution {
public:
  void merge(int arr1[], int arr2[], int n, int m) {
    int i = 0, j = 0, k = n - 1;

    while (i <= k and j < m) {
      if (arr1[i] < arr2[j])
        i++;
      else {
        swap(arr2[j++], arr1[k--]);
      }
    }

    sort(arr1, arr1 + n);
    sort(arr2, arr2 + m);
  }
};
```
