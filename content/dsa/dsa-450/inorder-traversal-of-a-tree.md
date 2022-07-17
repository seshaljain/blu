+++
title = "Inorder traversal of a tree"
author = ["Seshal Jain"]
tags = ["bt"]
draft = true
weight = 2157
+++

<https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/>

Left, Root, Right

Recursive

```cpp
void inorder(Node *root) {
  if (root == nullptr) {
    return;
  }

  inorder(root->left);

  cout << root->data << " ";

  inorder(root->right);
}
```

Iterative: use stack

```cpp
void inorderIterative(Node *root) {
  stack<Node *> stack;

  Node *curr = root;

  while (!stack.empty() || curr != nullptr) {
    if (curr != nullptr) {
      stack.push(curr);
      curr = curr->left;
    } else {
      curr = stack.top();
      stack.pop();
      cout << curr->data << " ";

      curr = curr->right;
    }
  }
}
```
