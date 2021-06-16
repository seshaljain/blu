+++
title = "Find the duplicate in an array of N+1 integers"
author = ["Seshal Jain"]
tags = ["done", "array"]
draft = false
weight = 2011
+++

<https://leetcode.com/problems/find-the-duplicate-number/>

Floyd's Tortoise & hare algorithm

```cpp
int findDuplicate(vector<int> &nums) {
  int slow = nums[0], fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  fast = nums[0];
  while (slow != fast) {
    fast = nums[fast];
    slow = nums[slow];
  }

  return fast;
}
```
