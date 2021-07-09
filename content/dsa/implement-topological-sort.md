+++
title = "Implement topological sort"
author = ["Seshal Jain"]
date = 2021-07-03T00:00:00+05:30
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2321
+++

<https://practice.geeksforgeeks.org/problems/topological-sort/1>

Topological sort is only valid for a Directed Acyclic Graph

```cpp
class Solution {
  stack<int> st;
  void dfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;

    for (auto it : adj[i]) {
      if (!visited[it]) {
        visited[it] = true;
        dfsHelper(it, visited, adj);
      }
    }

    st.push(i);
  }

public:
  vector<int> topoSort(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfsHelper(i, visited, adj);
      }
    }

    vector<int> topoOrder;

    while (!st.empty()) {
      topoOrder.push_back(st.top());
      st.pop();
    }

    return topoOrder;
  }
};
```
