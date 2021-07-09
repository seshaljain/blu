+++
title = "Left view of a tree"
author = ["Seshal Jain"]
date = 2021-06-26T00:00:00+05:30
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2163
+++

<https://leetcode.com/problems/binary-tree-right-side-view/>

```cpp
class Solution {
  vector<int> v;
  void leftView(TreeNode *root, int lvl) {
    if (root == nullptr)
      return;

    if (lvl >= v.size())
      v.push_back(root->val);

    leftView(root->right, lvl + 1);
    leftView(root->left, lvl + 1);
  }

public:
  vector<int> rightSideView(TreeNode *root) {
    leftView(root, 0);
    return v;
  }
};
```
