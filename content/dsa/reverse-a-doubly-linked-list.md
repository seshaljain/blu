+++
title = "Reverse a doubly linked list"
author = ["Seshal Jain"]
date = 2021-07-14T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2138
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
