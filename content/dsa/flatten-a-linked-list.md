+++
title = "Flatten a linked list"
author = ["Seshal Jain"]
date = 2021-07-14T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2146
+++

<https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1>

```cpp
Node *merge(Node *a, Node *b) {
  if (a == nullptr) {
    return b;
  }
  if (b == nullptr) {
    return a;
  }

  Node *result = nullptr;

  if (a->data < b->data) {
    result = a;
    result->bottom = merge(a->bottom, b);
  } else {
    result = b;
    result->bottom = merge(a, b->bottom);
  }

  result->next = nullptr;
  return result;
}

Node *flatten(Node *root) {
  if (root == nullptr || root->next == nullptr) {
    return root;
  }

  root->next = flatten(root->next);
  root = merge(root, root->next);

  return root;
}
```
