+++
title = "Dijkstra algorithm"
author = ["Seshal Jain"]
tags = ["graph"]
draft = false
weight = 2320
+++

<https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/>

## Undirected, unweighted graph {#undirected-unweighted-graph}

```cpp
vector<int> minDist(int src, int V, vector<int> adj[]) {
  vector<int> distances(V, INT_MAX);
  queue<int> q;

  distances[src] = 0;
  q.push(src);

  while (!q.empty()) {
    int node = q.front();
    q.pop();

    for (auto it : adj[node]) {
      if (distances[node] + 1 > distances[it]) {
        distances[it] = distances[node] + 1;
        q.push(it);
      }
    }
  }

  return distances;
}
```
