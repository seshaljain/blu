+++
title = "Left view of a tree"
author = ["Seshal Jain"]
date = 2021-06-26T00:00:00+05:30
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2163
+++

<https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1>

```cpp
void leftViewUtil(Node *root, vector<int> &v, int lvl) {
  if (root == nullptr)
    return;

  if (v.size() <= lvl) {
    v.push_back(root->data);
  }

  leftViewUtil(root->left, v, lvl + 1);
  leftViewUtil(root->right, v, lvl + 1);
}

vector<int> leftView(Node *root) {
  vector<int> v;
  leftViewUtil(root, v, 0);
  return v;
}
```
