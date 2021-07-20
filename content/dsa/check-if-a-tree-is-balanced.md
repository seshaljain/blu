+++
title = "Check if a tree is balanced"
author = ["Seshal Jain"]
date = 2021-07-20T00:00:00+05:30
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2167
+++

<https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1>

```cpp
bool balancedUtil(Node *root, int &height) {
  int lh = 0, rh = 0;

  if (root == nullptr) {
    height = 0;
    return 1;
  }

  int l = balancedUtil(root->left, lh);
  int r = balancedUtil(root->right, rh);

  height = max(lh, rh) + 1;

  if (abs(lh - rh) > 1)
    return 0;

  else
    return l && r;
}

bool isBalanced(Node *root) {
  int height = 0;
  return balancedUtil(root, height);
}
```
