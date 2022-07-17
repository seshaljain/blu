+++
title = "Find majority element"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["search-sort"]
draft = false
weight = 2090
+++

<https://practice.geeksforgeeks.org/problems/majority-element/0>

Moore's voting algorithm

```cpp
class Solution {
public:
  int majorityElement(vector<int> &nums) {
    int major = nums[0], count = 1;

    for (int i = 1; i < nums.size(); i++) {
      if (major == nums[i]) {
        count++;
      } else if (count == 0) {
        count++;
        major = nums[i];
      } else {
        count--;
      }
    }

    return major;
  }
};
```
