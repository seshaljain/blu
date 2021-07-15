+++
title = "Count of number of given string in 2D character array"
author = ["Seshal Jain"]
date = 2021-07-15T00:00:00+05:30
tags = ["string"]
categories = ["done"]
draft = false
weight = 2065
+++

<https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/>

```cpp
class Solution {
  bool searchUtil(int r, int c, string &word, vector<pair<int, int>> &dir,
                  vector<vector<char>> &grid) {
    int R = grid.size();
    int C = grid[0].size();

    if (grid[r][c] != word[0]) {
      return false;
    }

    int len = word.length();

    for (int i = 0; i < 8; i++) {
      int k = 1, rd = r + dir[i].first, cd = c + dir[i].second;

      while (k < len) {
        if (rd >= R || cd >= C || rd < 0 || cd < 0) {
          break;
        }

        if (grid[rd][cd] != word[k]) {
          break;
        }

        rd += dir[i].first;
        cd += dir[i].second;
        k++;
      }

      if (k == len)
        return true;
    }
    return false;
  }

public:
  vector<vector<int>> searchWord(vector<vector<char>> grid, string word) {
    vector<vector<int>> res;
    vector<pair<int, int>> dir = {{-1, -1}, {-1, 0}, {-1, 1}, {0, -1},
                                  {0, 1},   {1, -1}, {1, 0},  {1, 1}};

    for (int i = 0; i < grid.size(); i++) {
      for (int j = 0; j < grid[0].size(); j++) {
        if (searchUtil(i, j, word, dir, grid))
          res.push_back({i, j});
      }
    }
    return res;
  }
};
```
