+++
title = "Search in a rotated sorted array"
author = ["Seshal Jain"]
tags = ["search-sort"]
draft = true
weight = 2085
+++

<https://leetcode.com/problems/search-in-rotated-sorted-array/>

```cpp
class Solution {
public:
  int findMin(int arr[], int n) {
    int low = 0, high = n - 1;

    while (low <= high) {
      int mid = (low + high) / 2;
      int next = (mid + 1) % n;
      int prev = (mid + n - 1) % n;

      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return arr[mid];
      } else if (arr[mid] < arr[n - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  }
};
```
