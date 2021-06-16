+++
title = "Count set bits in an integer"
author = ["Seshal Jain"]
tags = ["done", "bit"]
draft = false
weight = 2408
+++

<https://practice.geeksforgeeks.org/problems/set-bits0143/1>

```cpp
int setBits(int N) {
  int bCount = 0;
  while (N) {
    N &= (N - 1);
    bCount++;
  }

  return bCount;
}
```
