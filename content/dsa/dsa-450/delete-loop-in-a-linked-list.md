+++
title = "Delete loop in a linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2120
+++

<https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1>

```cpp
class Solution {
public:
  void removeLoop(Node *head) {
    Node *hare = head, *tor = head;

    while (hare != nullptr && hare->next != nullptr && tor != nullptr) {
      tor = tor->next;
      hare = hare->next->next;

      if (hare == tor) {
        Node *ptr1 = tor, *ptr2 = tor;
        unsigned int k = 1;
        while (ptr1->next != ptr2) {
          ptr1 = ptr1->next;
          k++;
        }

        ptr1 = head;
        ptr2 = head;

        while (k--)
          ptr2 = ptr2->next;

        while (ptr2 != ptr1) {
          ptr1 = ptr1->next;
          ptr2 = ptr2->next;
        }

        while (ptr2->next != ptr1)
          ptr2 = ptr2->next;

        ptr2->next = nullptr;
      }
    }
  }
};
```
