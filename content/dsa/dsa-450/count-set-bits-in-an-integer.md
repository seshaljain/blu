+++
title = "Count set bits in an integer"
author = ["Seshal Jain"]
tags = ["bit"]
draft = true
weight = 2404
+++

<https://practice.geeksforgeeks.org/problems/set-bits0143/1>

```cpp
class Solution {
public:
  int setBits(int N) {
    int bCount = 0;
    while (N) {
      N &= (N - 1);
      bCount++;
    }

    return bCount;
  }
};
```
