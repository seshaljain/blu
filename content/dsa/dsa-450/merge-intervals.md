+++
title = "Merge intervals"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2012
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
