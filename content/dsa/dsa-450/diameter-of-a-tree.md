+++
title = "Diameter of a tree"
author = ["Seshal Jain"]
date = 2022-06-21T00:00:00+05:30
tags = ["bt"]
draft = false
weight = 2155
+++

<https://leetcode.com/problems/diameter-of-binary-tree/>
Leetcode expects diamater of tree to be number of edges, ∴ return `res - 1`

```cpp
class Solution {
    int diameter = 0;
public:
    int diameterOfBinaryTree(TreeNode* root) {
        diam(root);
        return diameter - 1;
    }

    int diam(TreeNode* root) {
        if(root == nullptr) return 0;

        int ld = diam(root->left);
        int rd = diam(root->right);

        int childD = max(ld, rd) + 1;
        int currD = ld + rd + 1;
        diameter = max({diameter, childD, currD});
        return childD;
    }
};
```
