+++
title = "Missing number in AP"
author = ["Seshal Jain"]
date = 2022-06-26T00:00:00+05:30
tags = ["search-sort"]
draft = false
weight = 2110
+++

<https://practice.geeksforgeeks.org/problems/arithmetic-number/0>

```cpp
class Solution {
public:
  int inSequence(int A, int B, int C) {
    // B = A + (n - 1)C
    // (B - A) / C + 1 = n;
    return (B == A + ((B - A) / C) * C);
  }
};
```
