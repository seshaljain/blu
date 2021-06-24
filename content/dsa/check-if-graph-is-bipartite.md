+++
title = "Check if graph is bipartite"
author = ["Seshal Jain"]
date = 2021-06-21T00:00:00+05:30
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2336
+++

<https://www.geeksforgeeks.org/bipartite-graph/>

Color the graph by BFS traversal, `colors` maintains track of visited nodes.

`colors[it] = 1 - colors[node]` is the fun alternator part

## Using BFS {#using-bfs}

```cpp
class Solution {
  bool bfsHelper(int i, vector<int> &colors, vector<int> adj[]) {
    queue<int> q;
    colors[i] = 1;
    q.push(i);

    while (!q.empty()) {
      int node = q.front();
      q.pop();

      for (int it : adj[node]) {
        if (colors[it] == -1) {
          colors[it] = 1 - colors[node];
          q.push(it);
        } else if (colors[it] == colors[node]) {
          return false;
        }
      }
    }
    return true;
  }

public:
  bool isBipartite(int V, vector<int> adj[]) {
    vector<int> colors(V, -1);

    for (int i = 0; i < V; i++) {
      if (colors[i] == -1) {
        if (!bfsHelper(i, colors, adj))
          return false;
      }
    }
    return true;
  }
};
```

## Using DFS {#using-dfs}

```cpp
class Solution {
  bool dfsHelper(int i, vector<int> &colors, vector<int> adj[]) {
    if (colors[i] == -1) {
      colors[i] = 1;
    }

    for (int it : adj[i]) {
      if (colors[it] == -1) {
        colors[it] = 1 - colors[i];

        if (!dfsHelper(it, colors, adj)) {
          return false;
        }
      } else if (colors[it] == colors[i]) {
        return false;
      }
    }
    return true;
  }

public:
  bool isBipartite(int V, vector<int> adj[]) {
    vector<int> colors(V, -1);

    for (int i = 0; i < V; i++) {
      if (colors[i] == -1) {
        if (!dfsHelper(i, colors, adj))
          return false;
      }
    }
    return true;
  }
};
```
