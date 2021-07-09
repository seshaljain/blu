+++
title = "Intersection of two sorted linked list"
author = ["Seshal Jain"]
date = 2021-07-01T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2129
+++

<https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1>

```cpp
class Solution {
public:
  ListNode *rotateRight(ListNode *head, int k) {
    ListNode *curr = head, *tmp = head;
    int len = 0;

    if (head == nullptr) {
      return head;
    }

    while (tmp != nullptr) {
      tmp = tmp->next;
      len++;
    }

    k %= len;

    tmp = head;

    while (k--) {
      while (tmp->next != nullptr) {
        curr = tmp;
        tmp = tmp->next;
      }

      tmp->next = head;
      curr->next = nullptr;
      head = tmp;
    }
    return head;
  }
};
```
