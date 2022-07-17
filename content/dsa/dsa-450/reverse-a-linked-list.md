+++
title = "Reverse a linked list"
author = ["Seshal Jain"]
date = 2022-06-11T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2117
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
