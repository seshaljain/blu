+++
title = "Find the Kth max and min element in an array"
author = ["Seshal Jain"]
date = 2021-06-16T00:00:00+05:30
tags = ["array"]
categories = ["done"]
draft = false
weight = 2004
+++

<https://practice.geeksforgeeks.org/problems/kth-smallest-element/0>

1.  Make priority queue of size `k`, insert first `k` elements from the array
2.  For the remaining elements, pop and insert into pq if element is smaller than top

<!--listend-->

```cpp
int kthSmallest(int arr[], int l, int r, int k) {
  priority_queue<int, vector<int>> pq(arr, arr + k);

  int n = r - l + 1;

  for (int i = k; i < n; i++) {
    if (arr[i] < pq.top()) {
      pq.pop();
      pq.push(arr[i]);
    }
  }

  return pq.top();
}
```
