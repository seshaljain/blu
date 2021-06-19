+++
title = "Kth largest element in an array"
author = ["Seshal Jain"]
date = 2021-06-19T00:00:00+05:30
tags = ["heap"]
categories = ["done"]
draft = false
weight = 2297
+++

<https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1>

```cpp
class Solution {
public:
  vector<int> kLargest(int arr[], int n, int k) {
    priority_queue<int> pq(arr, arr + n);

    vector<int> res;

    while (k--) {
      res.push_back(pq.top());
      pq.pop();
    }

    return res;
  }
};
```
