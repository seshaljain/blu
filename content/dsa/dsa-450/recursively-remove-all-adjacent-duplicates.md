+++
title = "Recursively remove all adjacent duplicates"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2077
+++

<https://practice.geeksforgeeks.org/problems/consecutive-elements/0>

```cpp
class Solution {
public:
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
};
```
