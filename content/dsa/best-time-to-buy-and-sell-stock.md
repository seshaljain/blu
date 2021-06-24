+++
title = "Best time to buy and sell stock"
author = ["Seshal Jain"]
tags = ["array"]
categories = ["done"]
draft = false
weight = 2016
+++

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock/>

## Only 1 transaction is allowed {#only-1-transaction-is-allowed}

One pass, just need to check the lowest valley/highest peak (and their difference)

This problem reduces to maximum difference between two elements

```cpp
class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int n = prices.size();
    int minPrice = INT_MAX, maxProfit = 0;

    for (int i = 0; i < n; i++) {
      minPrice = min(minPrice, prices[i]);
      maxProfit = max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
  }
};
```

## Any number of transactions are allowed {#any-number-of-transactions-are-allowed}

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int maxProfit(int k, vector<int> &prices) {
    int n = prices.size();
    if (n == 0)
      return 0;

    for (int i = 0; i <= k; i++) {
      int minPrice = prices[0];
      for (int j = 0; j < n; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else {
          minPrice = min(minPrice, prices[j] - dp[i - 1][j - 1]);
          dp[i][j] = max(dp[i][j - 1], prices[j] - minPrice);
        }
      }
    }
    return dp[k][n - 1];
  }
};
```
