+++
title = "Add two numbers represented by linked lists"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2126
+++

<https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1>

```cpp
class Solution {
  Node *reverse(Node *head) {
    Node *prev = nullptr, *curr = head, *next = nullptr;

    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }

public:
  Node *addTwoLists(struct Node *first, struct Node *second) {
    first = reverse(first);
    second = reverse(second);

    int c = 0, sum = 0;
    Node *start = nullptr, *end = nullptr;

    while (first != nullptr || second != nullptr) {
      int a = (first != nullptr) ? first->data : 0;
      int b = (second != nullptr) ? second->data : 0;

      sum = c + (a + b);
      c = (sum >= 10) ? 1 : 0;
      sum = sum % 10;

      if (start == nullptr) {
        start = new Node(sum);
        end = start;
      } else {
        end->next = new Node(sum);
        end = end->next;
      }
      if (first != nullptr)
        first = first->next;
      if (second != nullptr)
        second = second->next;
    }

    if (c > 0)
      end->next = new Node(c);
    start = reverse(start);
    return start;
  }
};
```
