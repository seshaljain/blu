+++
title = "Connect N ropes with minimum cost"
author = ["Seshal Jain"]
date = 2021-07-18T00:00:00+05:30
tags = ["heap", "greedy"]
categories = ["done"]
draft = false
weight = 2306
+++

<https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0>

```cpp
class Solution {
public:
  long long minCost(long long arr[], long long n) {
    priority_queue<long long, vector<long long>, greater<long long>> pq(
        arr, arr + n);

    long long cost = 0;

    while (pq.size() > 1) {
      long long t1 = pq.top();
      pq.pop();
      long long t2 = pq.top();
      pq.pop();

      cost += t1 + t2;
      pq.push(t1 + t2);
    }

    return cost;
  }
};
```
