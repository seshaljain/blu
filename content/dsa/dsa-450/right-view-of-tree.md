+++
title = "Right view of a tree"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2160
+++

<https://leetcode.com/problems/binary-tree-right-side-view/>

```cpp
class Solution {
  vector<int> v;
  void rightViewUtil(TreeNode *root, int lvl) {
    if (root == nullptr)
      return;
    if (v.size() <= lvl)
      v.push_back(root->val);

    rightViewUtil(root->right, lvl + 1);
    rightViewUtil(root->left, lvl + 1);
  }

public:
  vector<int> rightSideView(TreeNode *root) {
    rightViewUtil(root, 0);
    return v;
  }
};
```
