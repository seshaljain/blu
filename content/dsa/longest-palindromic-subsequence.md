+++
title = "Longest palindromic subsequence"
author = ["Seshal Jain"]
tags = ["dp"]
categories = ["done"]
draft = false
weight = 2389
+++

<https://leetcode.com/problems/longest-palindromic-subsequence/>

```cpp
class Solution {
    int dp[1005][1005];
public:
    int longestPalindromeSubseq(string s) {
        string rev = string(s.rbegin(), s.rend());

        int n = s.size();

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                } else if (s[i - 1] == rev[j - 1]) {
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
