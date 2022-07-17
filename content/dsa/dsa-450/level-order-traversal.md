+++
title = "Level order traversal"
author = ["Seshal Jain"]
date = 2022-06-21T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2152
+++

<https://practice.geeksforgeeks.org/problems/level-order-traversal/1>

BFS

```cpp
class Solution {
private:
  vector<vector<int>> ret;

public:
  vector<vector<int>> levelOrder(TreeNode *root) {
    buildVector(root, 0);
    return ret;
  }

  void buildVector(TreeNode *root, int depth) {
    if (root == NULL)
      return;
    if (ret.size() == depth)
      ret.push_back(vector<int>());

    ret[depth].push_back(root->val);
    buildVector(root->left, depth + 1);
    buildVector(root->right, depth + 1);
  }
};
```
