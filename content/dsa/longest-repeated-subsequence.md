+++
title = "Longest repeated subsequence"
author = ["Seshal Jain"]
tags = ["string", "dp"]
categories = ["done"]
draft = false
weight = 2368
+++

<https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0>

```cpp
class Solution {
  int dp[505][505];

public:
  int LongestRepeatingSubsequence(string str) {
    int n = str.size();

    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= n; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (str[i - 1] == str[j - 1] && i != j) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[n][n];
  }
};
```
