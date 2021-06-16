+++
title = "Diameter of a tree"
author = ["Seshal Jain"]
tags = ["done", "bt"]
draft = false
weight = 2157
+++

<https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1>

```cpp
class Solution {
  int d;

public:
  int diameterOfBinaryTree(TreeNode *root) {
    d = 0;
    diam(root);
    return d;
  }

  int diam(TreeNode *root) {
    if (root == nullptr)
      return 0;
    int ld = diam(root->left);
    int rd = diam(root->right);
    d = max(d, ld + rd);
    return max(ld, rd) + 1;
  }
};
```
