+++
title = "Check if a tree is a BST"
author = ["Seshal Jain"]
date = 2021-07-20T00:00:00+05:30
tags = ["bst"]
categories = ["done"]
draft = false
weight = 2193
+++

<https://leetcode.com/problems/validate-binary-search-tree/>

```cpp
class Solution {
  bool isValidBSTUtil(TreeNode *root, long l, long r) {
    if (!root) {
      return true;
    }

    if (root->val <= l || root->val >= r) {
      return false;
    }

    return isValidBSTUtil(root->left, l, root->val) &&
           isValidBSTUtil(root->right, root->val, r);
  }

public:
  bool isValidBST(TreeNode *root) {
    return isValidBSTUtil(root, LONG_MIN, LONG_MAX);
  }
};
```
