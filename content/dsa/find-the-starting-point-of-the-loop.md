+++
title = "Find the starting point of the loop"
author = ["Seshal Jain"]
date = 2021-06-18T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2123
+++

<https://leetcode.com/problems/linked-list-cycle-ii/>

```cpp
class Solution {
public:
  ListNode *detectCycle(ListNode *head) {
    if (head == NULL || head->next == NULL)
      return NULL;

    ListNode *slow = head;
    ListNode *fast = head;
    bool isCycle = false;

    while (slow != NULL && fast != NULL) {
      slow = slow->next;
      if (fast->next == NULL)
        return NULL;
      fast = fast->next->next;
      if (slow == fast) {
        isCycle = true;
        break;
      }
    }

    if (!isCycle)
      return NULL;
    slow = head;
    while (slow != fast) {
      slow = slow->next;
      fast = fast->next;
    }

    return slow;
  }
};
```
