+++
title = "Chocolate distribution"
author = ["Seshal Jain"]
tags = ["array", "greedy"]
categories = ["done"]
draft = false
weight = 2028
+++

<https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0>

Make window in sorted array, check for minimum

```cpp
class Solution {
public:
  long long findMinDiff(vector<long long> a, long long n, long long m) {
    if (m == 0 || n == 0)
      return 0;

    if (n < m)
      return -1;

    sort(a.begin(), a.end());
    long long ans = LLONG_MAX;

    for (long long i = 0; i + m - 1 < n; i++) {
      ans = min(ans, a[i + m - 1] - a[i]);
    }

    return ans;
  }
};
```
