+++
title = "Remove duplicates in a sorted linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2122
+++

<https://leetcode.com/problems/remove-duplicates-from-sorted-list/>

Check for last element having duplicate

```cpp
class Solution {
public:
  ListNode *deleteDuplicates(ListNode *head) {
    ListNode *tmp = head, *prev = head;

    while (tmp != nullptr) {
      if (tmp->val != prev->val) {
        prev->next = tmp;
        prev = tmp;
      }
      tmp = tmp->next;
    }

    if (prev != tmp)
      prev->next = nullptr;

    return head;
  }
};
```
