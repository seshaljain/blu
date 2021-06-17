+++
title = "Implement DFS"
author = ["Seshal Jain"]
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2313
+++

<https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1>

```cpp
class Solution {
  void dfs(int i, vector<int> &ans, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;
    ans.push_back(i);

    for (vector<int>::iterator it = adj[i].begin(); it != adj[i].end(); it++) {
      if (!visited[*it]) {
        dfs(*it, ans, visited, adj);
      }
    }
  }

public:
  vector<int> dfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);
    vector<int> ans;
    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i, ans, visited, adj);
      }
      return ans;
    }
  };
```
