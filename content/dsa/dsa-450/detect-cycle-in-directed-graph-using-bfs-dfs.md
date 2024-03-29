+++
title = "Detect cycle in directed graph using BFS/DFS"
author = ["Seshal Jain"]
tags = ["graph"]
draft = true
weight = 2311
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


## Using BFS {#using-bfs}

```cpp
class Solution {
public:
  bool isCyclic(int V, vector<int> adj[]) {
    vector<int> inDegree(V, 0);
    queue<int> q;

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

    int ctr = 0;

    while (!q.empty()) {
      int node = q.front();
      q.pop();
      ctr++;

      for (auto it : adj[node]) {
        inDegree[it]--;
        if (inDegree[it] == 0) {
          q.push(it);
        }
      }
    }

    if (ctr == V)
      return false;
    return true;
  }
};
```
