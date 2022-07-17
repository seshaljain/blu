+++
title = "Reverse a doubly linked list"
author = ["Seshal Jain"]
tags = ["ll"]
draft = true
weight = 2136
+++

<https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1>

```cpp
Node *reverseDLL(Node *head) {
  Node *temp = nullptr;
  Node *curr = head;

  while (curr != nullptr) {
    temp = curr->prev;
    curr->prev = curr->next;
    curr->next = temp;
    curr = curr->prev;
  }

  if (temp != nullptr)
    head = temp->prev;

  return head;
}
```
