+++
title = "Unbounded knapsack"
author = ["Seshal Jain"]
tags = ["dp"]
categories = ["done"]
draft = false
weight = 2387
+++

<https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int knapSack(int N, int W, int val[], int wt[]) {
    memset(dp, -1, sizeof(dp));

    for (int i = 0; i <= N; i++) {
      for (int j = 0; j <= W; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (wt[i - 1] <= j) {
          dp[i][j] = max(dp[i - 1][j], val[i - 1] + dp[i][j - wt[i - 1]]);
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[N][W];
  }
};
```
