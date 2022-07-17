+++
title = "Deletion of a node in a BST"
author = ["Seshal Jain"]
date = 2022-06-28T00:00:00+05:30
tags = ["bst"]
draft = false
weight = 2190
+++

<https://leetcode.com/problems/delete-node-in-a-bst/>

```cpp
class Solution {
    TreeNode *findSuccessor(TreeNode *root){
        if (root->left == nullptr) return root;

        return findSuccessor(root->left);
    }
    public:
    TreeNode *deleteNode(TreeNode *root, int key) {
        if(root == nullptr) return root;

        if(root->val > key) {
            root->left = deleteNode(root->left, key);
        } else if(root->val < key){
            root->right = deleteNode(root->right, key);
        } else {
            if (root->left == nullptr && root->right == nullptr) {
                return nullptr;
            }
            if (root->left == nullptr) return root->right;
            else if (root->right == nullptr) return root->left;

            TreeNode* successor = findSuccessor(root->right);
            root->val = successor->val;
            root->right = deleteNode(root->right, successor->val);
        }
        return root;
    }
};
```
