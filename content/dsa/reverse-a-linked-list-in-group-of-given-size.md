+++
title = "Reverse a linked list in group of given size"
author = ["Seshal Jain"]
date = 2021-06-18T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2120
+++

<https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1>

```cpp
class Solution {
public:
  struct node *reverse(struct node *head, int k) {
    stack<node *> st;
    struct node *curr = head;
    struct node *prev = nullptr;

    while (curr != nullptr) {
      int ctr = 0;
      while (curr != nullptr && ctr < k) {
        st.push(curr);
        curr = curr->next;
        ctr++;
      }

      while (!st.empty()) {
        if (prev == nullptr) {
          prev = st.top();
          head = prev;
          st.pop();
        } else {
          prev->next = st.top();
          prev = prev->next;
          st.pop();
        }
      }
    }

    prev->next = nullptr;
    return head;
  }
};
```
