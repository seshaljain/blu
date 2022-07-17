+++
title = "Mirror of a tree"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2156
+++

<https://leetcode.com/problems/invert-binary-tree/>

```cpp
class Solution {
  void swapNode(TreeNode *root) {
    if (root == nullptr) {
      return;
    }

    swapNode(root->left);
    swapNode(root->right);

    TreeNode *temp = root->left;
    root->left = root->right;
    root->right = temp;
  }

public:
  TreeNode *invertTree(TreeNode *root) {
    swapNode(root);
    return root;
  }
};
```
