+++
title = "Check if a linked list is a circular linked list"
author = ["Seshal Jain"]
date = 2021-07-11T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2134
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
