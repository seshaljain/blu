+++
title = "Check if binary tree is sum tree"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2173
+++

<https://practice.geeksforgeeks.org/problems/sum-tree/1>

```cpp
class Solution
{
    int sumUtil(Node *root) {
        if (root == nullptr) return 0;

        return sumUtil(root->left) + sumUtil(root->right) + root->data;
    }

    public:
    bool isSumTree(Node* root)
    {
        if (root == nullptr ||
            (root->left == nullptr && root->right == nullptr)) {
            return true;
        }

        if (root->data == sumUtil(root->left) + sumUtil(root->right)
            && isSumTree(root->left) && isSumTree(root->right)) {
            return true;
        }
    }
};
```
