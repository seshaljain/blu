+++
title = "Find the second most repeated word in string"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2069
+++

<https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence/0>

```cpp
class Solution {
public:
  string secFrequent(string arr[], int n) {
    map<string, int> mp;

    for (int i = 0; i < n; i++) {
      mp[arr[i]]++;
    }

    int maxFreq = -1, notMaxFreq = -1;
    string ans = "";

    for (auto it : mp) {
      if (it.second > maxFreq) {
        notMaxFreq = maxFreq;
        maxFreq = it.second;
      } else if (it.second > notMaxFreq && it.second != maxFreq) {
        notMaxFreq = it.second;
      }
    }

    for (auto it : mp) {
      if (it.second == notMaxFreq) {
        return it.first;
      }
    }
  }
};
```
