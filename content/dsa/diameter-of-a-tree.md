+++
title = "Diameter of a tree"
author = ["Seshal Jain"]
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2157
+++

<https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1>

Leetcode expects diamater of tree to be number of edges, ∴ return `re s - 1`

```cpp
class Solution {
  int diam(TreeNode *root, int &res) {
    if (root == nullptr)
      return 0;

    int ld = diam(root->left, res);
    int rd = diam(root->right, res);

    int edgeH = max(ld, rd) + 1;
    int currD = ld + rd + 1;
    int currMax = max(edgeH, currD);
    res = max(res, currMax);
    return edgeH;
  }

public:
  int diameterOfBinaryTree(TreeNode *root) {
    int res = INT_MIN;
    diam(root, res);
    return res - 1;
  }
};
```
