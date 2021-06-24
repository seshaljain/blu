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
  vector<int> bfsTraversal;

  void bfs(int i, vector<bool> &visited, vector<int> adj[]) {
    queue<int> q;
    visited[i] = true;
    q.push(i);

    while (!q.empty()) {
      int node = q.front();
      q.pop();
      bfsTraversal.push_back(node);

      for (int it : adj[node]) {
        if (!visited[it]) {
          visited[it] = true;
          q.push(it);
        }
      }
    }
  }

public:
  vector<int> bfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    // for (int i = 0; i < V; i++) {
      // if (!visited[i]) {
        int i = 0;
        bfs(i, visited, adj);
      // }
    // }

    return bfsTraversal;
  }
};
```
