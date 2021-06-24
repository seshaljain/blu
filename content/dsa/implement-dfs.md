+++
title = "Implement DFS"
author = ["Seshal Jain"]
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2312
+++

<https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1>

## Recursive {#recursive}

```cpp
class Solution {
  vector<int> dfsTraversal;

  void dfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;
    dfsTraversal.push_back(i);

    for (vector<int>::iterator it = adj[i].begin(); it != adj[i].end(); it++) {
      if (!visited[*it]) {
        dfs(*it, visited, adj);
      }
    }
  }

public:
  vector<int> dfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);
    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfsHelper(i, visited, adj);
      }
    }

    return dfsTraversal;
  }
};
```

## Iterative {#iterative}

```cpp
class Solution {
  vector<int> dfsTraversal;

  void dfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    stack<int> st;
    visited[i] = true;
    st.push(i);

    while (!st.empty()) {
      int node = st.top();
      st.pop();
      dfsTraversal.push_back(node);

      for (int it : adj[node]) {
        if (!visited[it]) {
          visited[it] = true;
          st.push(it);
        }
      }
    }
  }

public:
  vector<int> dfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfsHelper(i, visited, adj);
      }
    }

    return dfsTraversal;
  }
};
```
