+++
title = "Implement BFS"
author = ["Seshal Jain"]
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2311
+++

<https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1>

GfG has incorrect testcases. Always check for multiple components, which
requires the commented outer `visited` loop.

```cpp
class Solution {
public:
  vector<int> bfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);
    vector<int> v;
    deque<int> q;

    // for (int i = 0; i < V; i++) {
    // if (!visited[i]) {
    int i = 0;
    visited[i] = true;
    q.push_back(i);

    vector<int>::iterator it;

    while (!q.empty()) {
      int node = q.front();
      q.pop_front();
      v.push_back(node);

      for (it = (adj[node]).begin(); it != (adj[node]).end(); ++it)
        if (!visited[*it]) {
          visited[*it] = true;
          q.push_back(*it);
        }
    }
    // }
    // }
    return v;
  }
};
```
