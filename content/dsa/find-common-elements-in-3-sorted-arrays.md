+++
title = "Find common elements in 3 sorted arrays"
author = ["Seshal Jain"]
date = 2021-07-17T00:00:00+05:30
tags = ["array"]
categories = ["done"]
draft = false
weight = 2018
+++

<https://practice.geeksforgeeks.org/problems/common-elements1132/1>

```cpp
class Solution {
public:
  vector<int> common_element(vector<int> v1, vector<int> v2) {
    vector<int> v;
    sort(v1.begin(), v1.end());
    sort(v2.begin(), v2.end());

    int i = 0, j = 0;
    int n1 = v1.size(), n2 = v2.size();
    while (i < n1 && j < n2) {
      if (v1[i] == v2[j]) {
        v.push_back(v1[i]);
        i++;
        j++;
      } else if (v1[i] < v2[j]) {
        i++;
      } else {
        j++;
      }
    }

    return v;
  }
};
```
