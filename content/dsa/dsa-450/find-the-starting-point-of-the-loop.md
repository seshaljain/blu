+++
title = "Find the starting point of the loop"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2121
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
