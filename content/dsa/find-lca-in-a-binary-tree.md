+++
title = "Find LCA in a binary tree"
author = ["Seshal Jain"]
date = 2021-07-18T00:00:00+05:30
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2184
+++

<https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/>

```cpp
class Solution {
public:
  TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q) {
    if (root == nullptr) {
      return root;
    }

    if (root == p || root == q) {
      return root;
    }

    TreeNode *lt = lowestCommonAncestor(root->left, p, q);
    TreeNode *rt = lowestCommonAncestor(root->right, p, q);

    if (lt && rt) {
      return root;
    } else {
      return lt ? lt : rt;
    }
  }
};
```
