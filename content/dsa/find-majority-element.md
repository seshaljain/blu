+++
title = "Find majority element"
author = ["Seshal Jain"]
tags = ["done", "search-sort"]
draft = false
weight = 2092
+++

<https://practice.geeksforgeeks.org/problems/majority-element/0>

Moore's voting algorithm

```cpp
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
```
