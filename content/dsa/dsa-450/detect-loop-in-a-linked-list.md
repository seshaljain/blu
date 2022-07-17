+++
title = "Detect loop in a linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2119
+++

<https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1>

Floyd's tortoise and hare algorithm

```cpp
class Solution {
public:
  bool detectLoop(Node *head) {
    Node *hare = head, *tortoise = head;

    if (head == nullptr || head->next == nullptr)
      return false;

    while (hare != nullptr && tortoise != nullptr) {
      tortoise = tortoise->next;
      hare = hare->next;
      hare = hare ? hare->next : hare;
      if (hare == tortoise) {
        return true;
      }
    }

    return false;
  }
};
```
