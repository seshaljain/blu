+++
title = "Sort an array of 0s, 1s and 2s"
author = ["Seshal Jain"]
tags = ["array"]
categories = ["done"]
draft = false
weight = 2005
+++

<https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0>

```cpp
class Solution {
public:
  void sort012(int arr[], int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
      if (arr[mid] == 0) {
        swap(arr[mid], arr[low]);
        low++;
        mid++;
      } else if (arr[mid] == 1) {
        mid++;
      } else {
        swap(arr[mid], arr[high]);
        high--;
      }
    }
  }
};
```
