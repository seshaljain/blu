+++
title = "Longest common substring"
author = ["Seshal Jain"]
tags = ["dp"]
draft = true
weight = 2381
+++

<https://practice.geeksforgeeks.org/problems/longest-common-substring/0>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int longestCommonSubstr(string s1, string s2, int n, int m) {
    int ans = 0;
    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= m; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (s1[i - 1] == s2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
          ans = max(ans, dp[i][j]);
        } else {
          dp[i][j] = 0;
        }
      }
    }

    return ans;
  }
};
```
