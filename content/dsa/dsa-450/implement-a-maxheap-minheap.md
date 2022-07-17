+++
title = "Implement a maxheap/minheap"
author = ["Seshal Jain"]
tags = ["heap"]
draft = true
weight = 2292
+++

<https://www.geeksforgeeks.org/building-heap-from-array/>

```cpp
#include <bits/stdc++.h>
using namespace std;

class Heap {
  vector<int> v;
  bool isMinHeap;

  bool compare(int a, int b) { return isMinHeap ? a < b : a > b; }

  void heapify(int i) {
    int left = 2 * i, right = 2 * i + 1;

    int minIdx = i;
    if (left < (int)v.size() && compare(v[left], v[minIdx])) {
      minIdx = left;
    }
    if (right < (int)v.size() && compare(v[right], v[minIdx])) {
      minIdx = right;
    }

    if (minIdx != i) {
      swap(v[i], v[minIdx]);
      heapify(minIdx);
    }
  }

public:
  Heap(bool heapType = true) {
    isMinHeap = heapType;
    v.push_back(-1);
  }

  void push(int data) {
    v.push_back(data);
    int idx = v.size() - 1;
    int parent = idx / 2;

    while (idx > 1 && compare(v[idx], v[parent])) {
      swap(v[parent], v[idx]);
      idx = parent;
      parent = idx / 2;
    }
  }

  void pop() {
    swap(v[1], v.back());
    v.pop_back();

    heapify(1);
  }

  bool empty() { return v.size() == 1; }

  int top() {
    if (!empty()) {
      return v[1];
    } else {
      return -1;
    }
  }
};

int main() {
  Heap hp;
  int n;
  cin >> n;

  while (n--) {
    int x;
    cin >> x;
    hp.push(x);
  }

  while (!hp.empty()) {
    cout << hp.top() << "\n";
    hp.pop();
  }
}
```
