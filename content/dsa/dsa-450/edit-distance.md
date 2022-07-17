+++
title = "Edit distance"
author = ["Seshal Jain"]
tags = ["string", "dp"]
draft = true
weight = 2054
+++

<https://leetcode.com/problems/edit-distance/>

```text
+---------+-----+
| replace | del |
+---------+-----+
| insert  | X   |
+---------+-----+
```

```cpp
class Solution {
 int  dp[505][505];
 public:
  int minDistance(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();

    for (int i = 0; i <= m; i++) {
      for (int j = 0; j <= n; j++) {
        if (i == 0)
          dp[i][j] = j;
        else if (j == 0)
          dp[i][j] = i;
        else if (word1[i - 1] == word2[j - 1])
          dp[i][j] = dp[i - 1][j - 1];
        else {
          int insert = dp[i][j - 1];
          int del = dp[i - 1][j];
          int replace = dp[i - 1][j - 1];
          dp[i][j] = 1 + min({insert, del, replace});
        }
      }
    }
    return dp[m][n];
  }
};
```
