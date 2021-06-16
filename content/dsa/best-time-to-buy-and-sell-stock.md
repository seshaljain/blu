+++
title = "Best time to buy and sell stock"
author = ["Seshal Jain"]
tags = ["done", "array"]
draft = false
weight = 2016
+++

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock/>

One pass, just need to check the lowest valley/highest peak (and their difference)

```cpp
int maxProfit(vector<int> &prices) {
  int n = prices.size();
  int minPrice = INT_MAX, maxProfit = 0;

  for (int i = 0; i < n; i++) {
    minPrice = min(minPrice, prices[i]);
    maxProfit = max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}
```
