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

This problem reduces to maximum difference between two elements when larger
element must come after smaller element

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

## Maximum profit by buying and selling a share at most twice {#maximum-profit-by-buying-and-selling-a-share-at-most-twice}

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/>

```cpp
class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int n = prices.size();

    vector<int> profit(n, 0);

    int maxPrice = prices[n - 1];
    for (int i = n - 2; i >= 0; i--) {
      maxPrice = max(maxPrice, prices[i]);
      profit[i] = max(profit[i + 1], maxPrice - prices[i]);
    }

    int minPrice = prices[0];
    for (int i = 1; i < n; i++) {
      minPrice = min(minPrice, prices[i]);
      profit[i] = max(profit[i - 1], profit[i] + (prices[i] - minPrice));
    }

    return profit[n - 1];
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
