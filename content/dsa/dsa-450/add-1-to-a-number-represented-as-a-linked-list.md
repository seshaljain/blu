+++
title = "Add 1 to a number represented as a linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2125
+++

<https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1>

```cpp
class Solution {
  Node* reverseLL(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next;

    while (current != nullptr) {
      next = current->next;
      current->next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  Node *addOneUtil(Node* head) {
    Node* curr = head;
    Node* tmp = nullptr;

    int carry = 1, sum = 0;

    while (curr != nullptr) {
      sum = carry + curr->data;
      carry = (sum >= 10) ? 1 : 0;

      sum = sum % 10;
      curr->data = sum;

      tmp = curr;
      curr = curr->next;
    }

    if (carry > 0)
      tmp->next = new Node(carry);

    return head;
  }

public:
  Node *addOne(Node *head) {
    head = reverseLL(head);

    head = addOneUtil(head);

    return reverseLL(head);
  }
};
```
