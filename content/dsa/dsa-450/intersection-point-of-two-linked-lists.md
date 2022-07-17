+++
title = "Intersection point of two linked lists"
author = ["Seshal Jain"]
tags = ["ll"]
draft = true
weight = 2128
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
