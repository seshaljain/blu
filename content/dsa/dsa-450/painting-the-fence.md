+++
title = "Painting the fence"
author = ["Seshal Jain"]
tags = ["dp"]
draft = true
weight = 2362
+++

<https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1>

```cpp
class Solution {
  long long dp[100005];

public:
  long long countWays(int n, int k) {
    memset(dp, 0, sizeof(dp));
    long long mod = 1000000007;

    dp[1] = k;
    dp[2] = k * k;

    for (int i = 3; i <= n; i++) {
      dp[i] = ((k - 1) * (dp[i - 1] + dp[i - 2])) % mod;
    }

    return dp[n];
  }
};
```
