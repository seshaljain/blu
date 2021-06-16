+++
title = "Recursively remove all adjacent duplicates"
author = ["Seshal Jain"]
tags = ["done", "string"]
draft = false
weight = 2079
+++

<https://practice.geeksforgeeks.org/problems/consecutive-elements/0>

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
