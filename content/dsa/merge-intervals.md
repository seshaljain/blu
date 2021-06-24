+++
title = "Merge intervals"
author = ["Seshal Jain"]
date = 2021-06-20T00:00:00+05:30
tags = ["array"]
categories = ["done"]
draft = false
weight = 2013
+++

<https://leetcode.com/problems/merge-intervals/>

```cpp
class Solution {
public:
  vector<vector<int>> merge(vector<vector<int>> &intervals) {
    vector<vector<int>> mergedIntervals;

    if (intervals.empty())
      return mergedIntervals;

    vector<int> currInt = intervals[0];

    for (auto it : intervals) {
      if (it[0] <= currInt[1]) {
        currInt[1] = max(it[1], currInt[1]);
      } else {
        mergedIntervals.push_back(currInt);
        currInt = it;
      }
    }
    mergedIntervals.push_back(currInt);

    return mergedIntervals;
  }
};
```
