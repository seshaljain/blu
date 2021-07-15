+++
title = "Reverse a linked list"
author = ["Seshal Jain"]
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2119
+++

<https://www.geeksforgeeks.org/reverse-a-linked-list/>

```cpp
class Solution {
public:
  struct Node *reverseList(struct Node *head) {
    if (head == nullptr)
      return head;

    Node *prev = nullptr, *next, *curr = head;

    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
};
```
