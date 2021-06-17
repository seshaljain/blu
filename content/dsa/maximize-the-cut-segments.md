+++
title = "Maximize the cut segments"
author = ["Seshal Jain"]
tags = ["dp"]
categories = ["done"]
draft = false
weight = 2366
+++

<https://practice.geeksforgeeks.org/problems/cutted-segments/0>

```cpp
class Solution {
  int dp[10005];
  int solve(int x, int a, int b, int c) {
    if (dp[x] != -1)
      return dp[x];
    if (x < min({a, b, c}))
      return dp[x] = INT_MIN;
    int n1 = (x >= a) ? solve(x - a, a, b, c) + 1 : INT_MIN;
    int n2 = (x >= b) ? solve(x - b, a, b, c) + 1 : INT_MIN;
    int n3 = (x >= c) ? solve(x - c, a, b, c) + 1 : INT_MIN;
    dp[x] = max({n1, n2, n3});
    return dp[x];
  }

public:
  int maximizeTheCuts(int n, int x, int y, int z) {
    memset(dp, -1, sizeof(dp));

    dp[0] = 0;
    solve(n, x, y, z);
    return max(0, dp[n]);
  }
};
```
