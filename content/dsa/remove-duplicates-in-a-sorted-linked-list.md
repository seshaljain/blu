+++
title = "Remove duplicates in a sorted linked list"
author = ["Seshal Jain"]
date = 2021-06-18T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2124
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
