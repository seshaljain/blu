+++
title = "Longest common subsequence"
author = ["Seshal Jain"]
tags = ["done", "string", "dp"]
draft = false
weight = 2367
+++

<https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0>

Iterative

```cpp
class Solution {
  int dp[1005][1005];

public:
  int lcs(int x, int y, string s1, string s2) {
    for (int i = 0; i <= x; i++) {
      for (int j = 0; j <= y; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (s1[i - 1] == s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[x][y];
  }
};
```

Recursive

```cpp
class Solution {
  int dp[1005][1005];

public:
  int solve(int x, int y, string s, string s2) {
    if (x == 0 || y == 0) {
      return dp[x][y] = 0;
    } else if (dp[x][y] != -1) {
      return dp[x][y];
    } else {
      if (s1[x - 1] == s2[y - 1]) {
        return 1 + lcs(x - 1, y - 1, s1, s2);
      } else {
        return max(lcs(x - 1, y, s1, s2), lcs(x, y - 1, s1, s2));
      }
    }
  }
  int lcs(int x, int y, string s1, string s2) {
    memset(dp, -1, sizeof(dp));

    return dp[x][y];
  }
}
```
