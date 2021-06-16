+++
title = "Number of flips to make binary string alternate"
author = ["Seshal Jain"]
tags = ["done", "string"]
draft = false
weight = 2070
+++

<https://practice.geeksforgeeks.org/problems/min-number-of-flips/0>

```cpp
int minFlips(string S) {
  int zeroFlipCount = 0, oneFlipCount = 0;
  char expected = '0';
  for (int i = 0; i < S.length(); i++) {
    if (S[i] != expected)
      zeroFlipCount++;

    expected = (expected == '0') ? '1' : '0';
  }
  expected = '1';
  for (int i = 0; i < S.length(); i++) {
    if (S[i] != expected)
      oneFlipCount++;

    expected = (expected == '1') ? '0' : '1';
  }

  return min(zeroFlipCount, oneFlipCount);
}
```
