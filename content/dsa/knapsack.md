+++
title = "Knapsack"
author = ["Seshal Jain"]
tags = ["dp"]
categories = ["done"]
draft = false
weight = 2356
+++

<https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int knapSack(int W, int wt[], int val[], int n) {
    memset(dp, -1, sizeof(dp));

    for (int i = 0; i <= n; i++) {
      for (int w = 0; w <= W; w++) {
        if (i == 0 || w == 0)
          dp[i][w] = 0;
        else if (wt[i - 1] <= w)
          dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
        else
          dp[i][w] = dp[i - 1][w];
      }
    }
    return dp[n][W];
  }
};
```
