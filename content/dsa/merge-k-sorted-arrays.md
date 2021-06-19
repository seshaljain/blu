+++
title = "Merge K sorted arrays"
author = ["Seshal Jain"]
tags = ["heap"]
categories = ["done"]
draft = false
weight = 2298
+++

<https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1>

```cpp
class Solution {
public:
  vector<int> mergeKArrays(vector<vector<int>> arr, int k) {
    vector<int> res;
    vector<int> ptrs(k, 0);

    priority_queue<pair<int, int>, vector<pair<int, int>>,
                   greater<pair<int, int>>>
        hp;

    for (int i = 0; i < k; i++) {
      hp.push({arr[i][0], i});
    }

    for (int i = 0; i < k * k; i++) {
      pair<int, int> tmp = hp.top();
      hp.pop();
      ptrs[tmp.second]++;

      if (ptrs[tmp.second] < k) {
        hp.push({arr[tmp.second][ptrs[tmp.second]], tmp.second});
      } else {
        hp.push({INT_MAX, tmp.second});
      }

      res.push_back(tmp.first);
    }
    return res;
  }
};
```
