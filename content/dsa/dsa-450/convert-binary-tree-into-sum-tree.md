+++
title = "Convert binary tree into sum tree"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2170
+++

<https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1>

```cpp
class Solution {
  int sumUtil(Node *node) {
    if (node == nullptr)
      return 0;

    int tmp = node->data;

    int leftSum = sumUtil(node->left);
    int rightSum = sumUtil(node->right);

    node->data = leftSum + rightSum;
    return node->data + tmp;
  }

public:
  void toSumTree(Node *node) {
    sumUtil(node);
  }
};
```
