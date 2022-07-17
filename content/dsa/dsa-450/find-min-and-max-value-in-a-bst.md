+++
title = "Find min and max value in a BST"
author = ["Seshal Jain"]
date = 2022-06-28T00:00:00+05:30
tags = ["bst"]
draft = false
weight = 2188
+++

<https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1>

```cpp
int minValue(Node* root) {
    if (root == nullptr) return -1;

    if  (root->left == nullptr) return root->data;

    return minValue(root->left);
}
```
