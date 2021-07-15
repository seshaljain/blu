+++
title = "Implement topological sort"
author = ["Seshal Jain"]
date = 2021-07-13T00:00:00+05:30
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2321
+++

<https://practice.geeksforgeeks.org/problems/topological-sort/1>

Topological sort is only valid for a Directed Acyclic Graph

## Using DFS {#using-dfs}

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

## Using BFS {#using-bfs}

```cpp
class Solution {
public:
  vector<int> topoSort(int V, vector<int> adj[]) {
    vector<int> inDegree(V, 0);
    queue<int> q;
    vector<int> res;

    for (int i = 0; i < V; i++) {
      for (auto it : adj[i]) {
        inDegree[it]++;
      }
    }

    for (int i = 0; i < V; i++) {
      if (inDegree[i] == 0) {
        q.push(i);
      }
    }

    while (!q.empty()) {
      int node = q.front();
      q.pop();
      res.push_back(node);
      for (auto it : adj[node]) {
        inDegree[it]--;
        if (inDegree[it] == 0) {
          q.push(it);
        }
      }
    }

    return res;
  }
};
```
