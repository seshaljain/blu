+++
title = "Find the repeating and the missing"
author = ["Seshal Jain"]
tags = ["search-sort"]
categories = ["done"]
draft = false
weight = 2091
+++

<https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1>

```cpp
class Solution {
public:
  int *findTwoElement(int *arr, int n) {
    int *ans = new int(2);

    for (int i = 0; i < n; i++) {
      int index = abs(arr[i]) - 1;
      if (arr[index] < 0) {
        ans[0] = index + 1;
      }
      arr[index] = -abs(arr[index]);
    }

    for (int i = 0; i < n; i++) {
      if (arr[i] > 0) {
        ans[1] = i + 1;
        break;
      }
    }
    return ans;
  }
};
```
