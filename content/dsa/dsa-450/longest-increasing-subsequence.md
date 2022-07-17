+++
title = "Longest increasing subsequence"
author = ["Seshal Jain"]
tags = ["dp"]
draft = true
weight = 2366
+++

<https://leetcode.com/problems/longest-increasing-subsequence/>

```cpp
class Solution {
public:
  int lengthOfLIS(vector<int> &nums) {
    int n = nums.size();
    vector<int> dp(n, 1);
    for (int i = 0; i < n; ++i)
      for (int j = 0; j < i; ++j)
        if (nums[i] > nums[j] && dp[i] < dp[j] + 1)
          dp[i] = dp[j] + 1;
    return *max_element(dp.begin(), dp.end());
  }
};
```
