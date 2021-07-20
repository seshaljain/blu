+++
title = "Find min and max value in a BST"
author = ["Seshal Jain"]
date = 2021-07-20T00:00:00+05:30
tags = ["bst"]
categories = ["done"]
draft = false
weight = 2191
+++

<https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1>

```cpp
int minValue(Node *node) {
  Node *current = node;

  while (current->left != nullptr) {
    current = current->left;
  }
  return (current->data);
}
```
