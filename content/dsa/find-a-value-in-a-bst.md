+++
title = "Find a value in a BST"
author = ["Seshal Jain"]
date = 2021-07-20T00:00:00+05:30
tags = ["bst"]
categories = ["done"]
draft = false
weight = 2189
+++

<https://leetcode.com/problems/search-in-a-binary-search-tree/>

```cpp
class Solution {
public:
  TreeNode *searchBST(TreeNode *root, int val) {
    if (root == nullptr)
      return nullptr;

    if (root->val == val)
      return root;
    else if (val < root->val)
      return searchBST(root->left, val);
    else
      return searchBST(root->right, val);
  }
};
```
