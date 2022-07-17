+++
title = "Find minimum number of coins"
author = ["Seshal Jain"]
tags = ["greedy"]
draft = true
weight = 2214
+++

<https://practice.geeksforgeeks.org/problems/coin-piles/0>

```cpp
class Solution {
public:
  int coinChange(vector<int> &coins, int amount) {
    int n = coins.size();
    int dp[n + 1][amount + 1];

    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= amount; j++) {
        if (j == 0) {
          dp[i][j] = 0;
        }
        if (i == 0) {
          dp[i][j] = INT_MAX - 1;
        }
      }
    }

    dp[0][0] = 0;

    for (int i = 1; i <= n; i++)
      for (int j = 1; j <= amount; j++) {
        if (coins[i - 1] <= j) {
          dp[i][j] = min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }

    return dp[n][amount] == INT_MAX - 1 ? -1 : dp[n][amount];
  }
};
```
