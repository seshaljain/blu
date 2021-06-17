+++
title = "Postorder traversal of a tree"
author = ["Seshal Jain"]
tags = ["bt"]
categories = ["done"]
draft = false
weight = 2161
+++

<https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/>

Left, Right, Root

Recursive

```cpp
void postorder(Node *root) {
  if (root == nullptr) {
    return;
  }

  postorder(root->left);

  postorder(root->right);

  cout << root->data << " ";
}
```

Iterative: use stack

```cpp
void postorderIterative(Node *root) {
  stack<Node *> s;
  s.push(root);

  stack<int> out;

  while (!s.empty()) {
    Node *curr = s.top();
    s.pop();

    out.push(curr->data);

    if (curr->left) {
      s.push(curr->left);
    }

    if (curr->right) {
      s.push(curr->right);
    }
  }

  while (!out.empty()) {
    cout << out.top() << " ";
    out.pop();
  }
}
```
