+++
title = "Find inorder successor and inorder predecessor in a BST"
author = ["Seshal Jain"]
date = 2022-06-28T00:00:00+05:30
tags = ["bst"]
draft = false
weight = 2189
+++

<https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1>

```cpp
void findPreSuc(Node* root, Node*& pre, Node*& suc, int key) {
    if (root == nullptr) return;

    if (root->key > key) {
        suc = root;
        findPreSuc(root->left, pre, suc, key);
    } else if (root->key < key) {
        pre = root;
        findPreSuc(root->right, pre, suc, key);
    } else {
        if (root->left != nullptr) {
            Node *tmp = root->left;
            while (tmp->right != nullptr) tmp = tmp->right;
            pre = tmp;
        }
        if (root->right != nullptr) {
            Node *tmp = root->right;
            while (tmp->left != nullptr) tmp = tmp->left;
            suc = tmp;
        }
    }
}
```
