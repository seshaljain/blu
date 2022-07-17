+++
title = "Check whether a string is palindrome"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2044
+++

<https://practice.geeksforgeeks.org/problems/palindrome-string0817/1>

```cpp
class Solution {
public:
  int isPlaindrome(string S) {
    int n = S.size();

    for (int i = 0; i < n / 2; i++) {
      if (S[i] != S[n - i - 1])
        return false;
    }

    return true;
  }
};
```
