+++
title = "Recursively remove all adjacent duplicates"
author = ["Seshal Jain"]
tags = ["done", "string"]
draft = false
weight = 2079
+++

<https://practice.geeksforgeeks.org/problems/consecutive-elements/0>

```cpp
string removeConsecutiveCharacter(string S) {
  int n = S.size();
  string ans = "";

  for (int i = 0; i < n - 1; i++) {
    ans += S[i];
    while (S[i] == S[i + 1]) {
      i++;
    }
  }

  if (S[n - 1] != S[n - 2])
    ans += S[n - 1];

  return ans;
}
```
