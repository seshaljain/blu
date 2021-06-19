+++
title = "Find maximum product subarray"
author = ["Seshal Jain"]
date = 2021-06-16T00:00:00+05:30
tags = ["array"]
categories = ["done"]
draft = false
weight = 2022
+++

<https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1>

```cpp
class Solution {
public:
  int maxProduct(vector<int> &nums) {
    int n = nums.size();
    int maxP = nums[0], currMaxP = nums[0], currMinP = nums[0],
        prevMinP = nums[0], prevMaxP = nums[0];

    for (int i = 1; i < n; i++) {
      currMinP = min({prevMinP * nums[i], prevMaxP * nums[i], nums[i]});
      currMaxP = max({prevMinP * nums[i], prevMaxP * nums[i], nums[i]});
      maxP = max(maxP, currMaxP);
      prevMinP = currMinP;
      prevMaxP = currMaxP;
    }

    return maxP;
  }
};
```
