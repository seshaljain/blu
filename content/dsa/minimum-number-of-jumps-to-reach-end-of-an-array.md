+++
title = "Minimum number of jumps to reach end of an array"
author = ["Seshal Jain"]
tags = ["done", "array"]
draft = false
weight = 2010
+++

<https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0>

```cpp
int minJumps(int arr[], int n) {
  int maxReachable = arr[0], jumps = 1, steps = arr[0];

  for (int i = 1; i < n; i++) {
    if (i == n - 1)
      return jumps;
    maxReachable = max(maxReachable, i + arr[i]);
    steps--;
    if (steps == 0) {
      if (i >= maxReachable)
        return -1;
      jumps++;
      steps = maxReachable - i;
    }
    if (steps < 0)
      return -1;
  }
}
```
