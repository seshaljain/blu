+++
title = "Find longest consecutive subsequence"
author = ["Seshal Jain"]
date = 2021-06-16T00:00:00+05:30
tags = ["array"]
categories = ["done"]
draft = false
weight = 2023
+++

<https://leetcode.com/problems/longest-consecutive-sequence/submissions/>

```cpp
class Solution {
public:
  int longestConsecutive(vector<int> &nums) {
    set<int> st(nums.begin(), nums.end());
    int maxLength = 0;

    for (auto it : st) {
      if (st.find(it - 1) == st.end()) {
        int currentNum = it;
        int currLength = 1;
        while (st.find(currentNum + 1) != st.end()) {
          currentNum += 1;
          currLength += 1;
        }

        maxLength = max(maxLength, currLength);
      }
    }
    return maxLength;
  }
};
```
