+++
title = "Find the duplicate in an array of N+1 integers"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2010
+++

<https://leetcode.com/problems/find-the-duplicate-number/>

Floyd's tortoise &amp; hare algorithm

```cpp
class Solution {
public:
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
};
```
