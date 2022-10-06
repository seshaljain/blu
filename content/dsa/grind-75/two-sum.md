+++
title = "Two Sum"
author = ["Seshal Jain"]
date = 2022-07-17T00:00:00+05:30
tags = ["array", "hashing", "easy"]
draft = false
weight = 2001
duration = 15
+++

<https://leetcode.com/problems/two-sum>

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> mp;

        vector<int> ans(2);

        for (int i = 0; i < nums.size(); i++) {
            if (mp.find(target - nums[i]) != mp.end()) {
                ans[0] = i;
                ans[1] = mp[target-nums[i]];
            } else {
                mp.insert({nums[i], i});
            }
        }

        return ans;
    }
};
```
