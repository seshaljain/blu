+++
title = "Reverse a linked list"
author = ["Seshal Jain"]
tags = ["done", "ll"]
draft = false
weight = 2119
+++

<https://www.geeksforgeeks.org/reverse-a-linked-list/>

```cpp
class Solution {
public:
  int findPages(int arr[], int n, int m) {
    sort(arr, arr + n);
    int start = *max_element(arr, arr + n), end = accumulate(arr, arr + n, 0);
    int mid = -1;
    int res = INT_MAX;
    while (start <= end) {
      mid = start + (end - start) / 2;
      if (isValid(arr, n, m, mid)) {
        res = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return res;
  }

  bool isValid(int arr[], int n, int k, int mx) {
    int sum = 0, groups = 1;

    for (int i = 0; i < n; i++) {
      if (sum + arr[i] <= mx) {
        sum += arr[i];
      } else {
        sum = 0;
        groups++;
      }
    }
    return (groups == k);
  }
};
```
