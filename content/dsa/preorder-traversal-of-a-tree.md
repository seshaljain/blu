+++
title = "Preorder traversal of a tree"
author = ["Seshal Jain"]
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2160
+++

<https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/>

Root, Left, Right

Recursive

```cpp
void preorder(Node *root) {
  if (root == nullptr) {
    return;
  }

  cout << root->data << " ";

  preorder(root->left);

  preorder(root->right);
}
```

Iterative: use stack

```cpp
void preorderIterative(Node *root) {
  if (root == nullptr)
    return;

  stack<Node *> stack;
  stack.push(root);

  while (!stack.empty()) {
    Node *curr = stack.top();
    stack.pop();

    cout << curr->data << " ";

    if (curr->right) {
      stack.push(curr->right);
    }

    if (curr->left) {
      stack.push(curr->left);
    }
  }
}
```
