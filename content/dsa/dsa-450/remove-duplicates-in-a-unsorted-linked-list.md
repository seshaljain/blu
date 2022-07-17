+++
title = "Remove duplicates in a unsorted linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2123
+++

<https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1>

```cpp
class Solution {
public:
  Node *removeDuplicates(Node *head) {
    set<int> seen;

    struct Node *curr = head;
    struct Node *prev = nullptr;
    while (curr != nullptr) {
      if (seen.find(curr->data) != seen.end()) {
        prev->next = curr->next;
        delete (curr);
      } else {
        seen.insert(curr->data);
        prev = curr;
      }
      curr = prev->next;
    }
    return head;
  }
};
```
