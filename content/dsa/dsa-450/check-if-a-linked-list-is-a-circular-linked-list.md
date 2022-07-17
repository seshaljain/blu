+++
title = "Check if a linked list is a circular linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2132
+++

<https://practice.geeksforgeeks.org/problems/circular-linked-list/1>

```cpp
bool isCircular(Node *head) {
  if (head == nullptr) {
    return true;
  }

  Node *curr = head->next;

  while (curr != nullptr) {
    if (curr == head) {
      return true;
    }
    curr = curr->next;
  }

  return false;
}
```
