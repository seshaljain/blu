+++
title = "Search an element in a matrix"
author = ["Seshal Jain"]
tags = ["matrix"]
categories = ["done"]
draft = false
weight = 2036
+++

<https://leetcode.com/problems/search-a-2d-matrix/>

Altered binary search

```cpp
bool searchMatrix(vector<vector<int>> &matrix, int target) {
  int n = matrix.size();
  int m = matrix[0].size();
  int l = 0, r = n * m - 1;

  while (l <= r) {
    int mid = (l + r) / 2;
    int N = mid / m;
    int M = mid % m;

    if (target == matrix[N][M])
      return true;
    else if (target < matrix[N][M])
      r = mid - 1;
    else
      l = mid + 1;
  }

  return false;
}
```
