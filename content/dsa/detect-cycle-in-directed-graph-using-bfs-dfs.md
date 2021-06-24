+++
title = "Detect cycle in directed graph using BFS/DFS"
author = ["Seshal Jain"]
date = 2021-06-22T00:00:00+05:30
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2313
+++

<https://www.geeksforgeeks.org/detect-cycle-in-a-graph/>

## Using DFS {#using-dfs}

```cpp
class Solution {
  bool dfsHelper(int i, vector<bool> &visited, vector<bool> &visitedDirected,
                 vector<int> adj[]) {
    visited[i] = true;
    visitedDirected[i] = true;

    for (int it : adj[i]) {
      if (!visited[it]) {
        if (dfsHelper(it, visited, visitedDirected, adj)) {
          return true;
        }
      } else if (visitedDirected[it]) {
        return true;
      }
    }
    visitedDirected[i] = false;
    return false;
  }

public:
  bool isCyclic(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);
    vector<bool> visitedDirected(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        if (dfsHelper(i, visited, visitedDirected, adj)) {
          return true;
        }
      }
    }
    return false;
  }
};
```
