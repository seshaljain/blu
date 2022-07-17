+++
title = "Height of a tree"
author = ["Seshal Jain"]
date = 2022-06-21T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2154
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
