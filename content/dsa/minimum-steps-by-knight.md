+++
title = "Minimum steps by knight"
author = ["Seshal Jain"]
date = 2021-07-17T00:00:00+05:30
tags = ["graph"]
categories = ["done"]
draft = false
weight = 2315
+++

<https://practice.geeksforgeeks.org/problems/steps-by-knight/0>

```cpp
class pos {
public:
  int x, y, dist;

  pos(int x, int y, int dist) : x(x), y(y), dist(dist) {}
};

class Solution {
  bool isInside(int x, int y, int N) {
    return (x >= 1 and x <= N and y >= 1 and y <= N);
  }

public:
  int minStepToReachTarget(vector<int> &KnightPos, vector<int> &TargetPos,
                           int N) {
    vector<pair<int, int>> dir = {
        {-2, -1}, {-1, -2}, {1, -2}, {2, -1}, {-2, 1}, {-1, 2}, {1, 2}, {2, 1},
    };

    bool visited[N + 1][N + 1] = {0};
    queue<pos> q;

    q.push(pos(KnightPos[0], KnightPos[1], 0));
    visited[KnightPos[0]][KnightPos[1]] = true;

    while (!q.empty()) {
      pos currPos = q.front();
      q.pop();

      if (currPos.x == TargetPos[0] and currPos.y == TargetPos[1]) {
        return currPos.dist;
      }
      for (int i = 0; i < 8; i++) {
        int x = currPos.x + dir[i].first;
        int y = currPos.y + dir[i].second;

        if (isInside(x, y, N) and !visited[x][y]) {
          q.push(pos(x, y, currPos.dist + 1));
          visited[x][y] = true;
        }
      }
    }
  }
};
```
