+++
title = "Count and say"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2049
+++

<https://leetcode.com/problems/count-and-say/>

```cpp
class Solution {
public:
  string countAndSay(int n) {
    if (n == 1)
      return "1";

    string cur = "";
    string prev = countAndSay(n - 1);
    int count = 0;

    for (int i = 0; i < prev.size(); i++) {
      count++;

      if (i == prev.size() - 1 || prev[i] != prev[i + 1]) {
        cur += to_string(count);
        cur += prev[i];
        count = 0;
      }
    }

    return cur;
  }
};
```
