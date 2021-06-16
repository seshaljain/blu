+++
title = "Reverse a string"
author = ["Seshal Jain"]
tags = ["done", "string"]
draft = false
weight = 2045
+++

<https://leetcode.com/problems/reverse-string/>

```cpp
void reverseString(vector<char> &s) {
  int n = s.size();

  for (int i = 0; i < n / 2; i++) {
    char tmp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = tmp;
  }
}
```
