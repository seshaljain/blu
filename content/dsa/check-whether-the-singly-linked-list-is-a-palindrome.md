+++
title = "Check whether the singly linked list is a palindrome"
author = ["Seshal Jain"]
date = 2021-07-13T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2136
+++

<https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1>

```cpp
class Solution {
  Node *reverseLL(Node *head) {
    Node *curr = head, *prev = nullptr, *next;

    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }

public:
  // Function to check whether the list is palindrome.
  bool isPalindrome(Node *head) {
    int ctr = 0;
    Node *slow = head, *fast = head;

    if (head == nullptr || head->next == nullptr) {
      return true;
    }

    while (slow != nullptr) {
      slow = slow->next;
      ctr++;
    }

    slow = head;

    while (fast != nullptr) {
      slow = slow->next;
      fast = fast->next;

      if (fast != nullptr) {
        fast = fast->next;
      }
    }

    slow = reverseLL(slow);
    fast = head;

    while (slow != nullptr) {
      if (fast->data != slow->data) {
        return false;
      }
      slow = slow->next;
      fast = fast->next;
    }

    return true;
  }
};
```
