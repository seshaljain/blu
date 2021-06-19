+++
title = "Height of a tree"
author = ["Seshal Jain"]
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2156
+++

<https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1>

```cpp
class Solution {
public:
  int maxDepth(TreeNode *root) {
    if (root == nullptr)
      return 0;

    return 1 + max(maxDepth(root->left), maxDepth(root->right));
  }
};
```
