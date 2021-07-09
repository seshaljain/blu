+++
title = "Add 1 to a number represented as a linked list"
author = ["Seshal Jain"]
date = 2021-06-29T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2127
+++

<https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1>

```cpp
class Solution {
  Node *reverse(Node *head) {
    Node *prev = nullptr;
    Node *current = head;
    Node *next;
    while (current != nullptr) {
      next = current->next;
      current->next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  Node *addOneUtil(Node *head) {
    Node *ans = head;
    Node *temp, *prev = nullptr;

    int carry = 1, sum = 0;

    while (head != nullptr) {
      sum = carry + head->data;
      carry = (sum >= 10) ? 1 : 0;

      sum = sum % 10;
      head->data = sum;

      temp = head;
      head = head->next;
    }

    if (carry > 0)
      temp->next = new Node(carry);

    return ans;
  }

public:
  Node *addOne(Node *head) {
    head = reverse(head);

    head = addOneUtil(head);

    return reverse(head);
  }
};
```
