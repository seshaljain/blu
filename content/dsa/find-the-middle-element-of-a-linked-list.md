+++
title = "Find the middle element of a linked list"
author = ["Seshal Jain"]
date = 2021-07-11T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2133
+++

<https://leetcode.com/problems/middle-of-the-linked-list/>

```cpp
class Solution {
public:
  ListNode *middleNode(ListNode *head) {
    ListNode *slow = head;
    ListNode *fast = head;

    while (fast != nullptr && fast->next != nullptr) {
      slow = slow->next;
      fast = fast->next->next;
    }

    return slow;
  }
};
```
