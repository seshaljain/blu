+++
title = "Coin change"
author = ["Seshal Jain"]
tags = ["dp"]
categories = ["done"]
draft = false
weight = 2355
+++

<https://practice.geeksforgeeks.org/problems/coin-change2448/1>

```cpp
class Solution {
  long long dp[1005][1005];

public:
  long long int count(int S[], int m, int n) {
    memset(dp, -1, sizeof(dp));

    for (int i = 0; i <= m; i++) {
      dp[i][0] = 1;
    }

    for (int j = 1; j <= n; j++) {
      dp[0][j] = 0;
    }

    for (int i = 1; i <= m; i++) {
      for (int j = 1; j <= n; j++) {
        if (S[i - 1] <= j) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - S[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[m][n];
  }
};
```
