+++
title = "Next permutation"
author = ["Seshal Jain"]
date = 2022-07-03T00:00:00+05:30
tags = ["array"]
draft = false
weight = 2013
+++

<https://leetcode.com/problems/next-permutation/>

1.  Find non-increasing sequence from right
2.  Find just greater number from right
3.  Swap them
4.  Reverse from `i` to end

<!--listend-->

```cpp
class Solution {
public:
  void nextPermutation(vector<int> &nums) {
    int i = nums.size() - 2;

    while (i >= 0 && nums[i + 1] <= nums[i]) {
      i--;
    }

    if (i >= 0) {
      int j = nums.size() - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      swap(nums[i], nums[j]);
    }

    reverse(nums.begin() + i + 1, nums.end());
  }
};
```
