+++
title = "Find the triplet that sum to a given value"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2025
+++

<https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0>

```cpp
class Solution {
public:
  bool find3Numbers(int A[], int n, int X) {
    sort(A, A + n);
    for (int i = 0; i < n - 2; i++) {
      int l = i + 1, r = n - 1;

      while (l < r) {
        int sum = A[i] + A[l] + A[r];
        if (sum == X)
          return true;
        else if (sum < X) {
          l++;
        } else {
          r--;
        }
      }
    }
    return false;
  }
};
```


## When `X = 0` {#when-x-0}

<https://leetcode.com/problems/3sum/>
2 pointer, avoid duplicates since `vector<vector<int>>` returned

```cpp
class Solution {
public:
  vector<vector<int>> threeSum(vector<int> &nums) {
    vector<vector<int>> ans;

    sort(nums.begin(), nums.end());

    int n = nums.size();
    for (int i = 0; i < n - 2; i++) {
      if (i == 0 || nums[i] != nums[i - 1]) {
        int l = i + 1, r = n - 1;

        while (l < r) {
          if (nums[l] + nums[r] + nums[i] == 0) {
            vector<int> triplet = {nums[l], nums[r], nums[i]};
            ans.push_back(triplet);

            while (l < r && nums[l] == nums[l + 1]) {
              l++;
            }
            while (l < r && nums[r] == nums[r - 1]) {
              r--;
            }

            l++;
            r--;
          } else if (nums[l] + nums[r] + nums[i] > 0) {
            r--;
          } else {
            l++;
          }
        }
      }
    }
    return ans;
  }
};
```
