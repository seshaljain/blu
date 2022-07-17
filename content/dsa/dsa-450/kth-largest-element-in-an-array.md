+++
title = "Kth largest element in an array"
author = ["Seshal Jain"]
date = 2022-07-02T00:00:00+05:30
tags = ["heap"]
draft = false
weight = 2295
+++

<https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1>

Make heap of size `k`, then insert remaining only if greater
Minheap for k largest, maxheap for k smallest

```cpp
class Solution {
public:
  vector<int> kLargest(int arr[], int n, int k) {
    priority_queue<int, vector<int>, greater<int>> pq(arr, arr + k);

    vector<int> res;
    for (int i = k; i < n; i++) {
      if (arr[i] > pq.top()) {
        pq.pop();
        pq.push(arr[i]);
      }
    }

    while (!pq.empty()) {
      res.push_back(pq.top());
      pq.pop();
    }

    reverse(res.begin(), res.end());

    return res;
  }
};
```
