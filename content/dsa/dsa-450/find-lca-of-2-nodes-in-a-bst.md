+++
title = "Find LCA in a BST"
author = ["Seshal Jain"]
tags = ["bst"]
draft = true
weight = 2193
+++

<https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1>

```cpp
class Solution {
public:
  TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q) {
    if (root == nullptr)
      return root;

    if (root == p || root == q)
      return root;

    int rootVal = root->val, pVal = p->val, qVal = q->val;

    if (rootVal < pVal && rootVal < qVal) {
      return lowestCommonAncestor(root->right, p, q);
    } else if (rootVal > pVal && rootVal > qVal) {
      return lowestCommonAncestor(root->left, p, q);
    } else {
      return root;
    }
  }
};
```
