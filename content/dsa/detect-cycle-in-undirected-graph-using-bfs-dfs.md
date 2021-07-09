+++
title = "Detect cycle in undirected graph using BFS/DFS"
author = ["Seshal Jain"]
date = 2021-07-02T00:00:00+05:30
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2314
+++

<https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1>

## DFS {#dfs}

```cpp
class Solution {
  bool dfsHelper(int i, int p, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;

    for (auto it : adj[i]) {
      if (visited[it] == false) {
        if (dfsHelper(it, i, visited, adj)) {
          return true;
        }
      } else if (it != p) {
        return true;
      }
    }
    return false;
  }

public:
  bool isCycle(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        if (dfsHelper(i, -1, visited, adj)) {
          return true;
        }
      }
    }
    return false;
  }
};
```

## BFS {#bfs}

```cpp
class Solution {
  bool bfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;
    queue<pair<int, int>> q;
    q.push({i, -1});

    while (!q.empty()) {
      int node = q.front().first;
      int parent = q.front().second;
      q.pop();

      for (auto it : adj[node]) {
        if (!visited[it]) {
          visited[it] = true;
          q.push({it, node});
        } else if (it != parent) {
          return true;
        }
      }
    }

    return false;
  }

public:
  bool isCycle(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        if (bfsHelper(i, visited, adj)) {
          return true;
        }
      }
    }
    return false;
  }
};
```
