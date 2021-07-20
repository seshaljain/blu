+++
title = "Intersection point of two linked lists"
author = ["Seshal Jain"]
date = 2021-07-20T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2130
+++

<https://leetcode.com/problems/intersection-of-two-linked-lists/>

```cpp
class Solution {
public:
  ListNode *getIntersectionNode(ListNode *A, ListNode *B) {
    if (A == NULL || B == NULL) {
      return NULL;
    }

    ListNode *a = A;
    ListNode *b = B;

    while (a != b) {
      if (a == NULL) {
        a = B;
      }
      if (b == NULL) {
        b = A;
      }
      if (a == b) {
        break;
      } else {
        a = a->next;
        b = b->next;
      }
    }
    return a;
  }
};
```
