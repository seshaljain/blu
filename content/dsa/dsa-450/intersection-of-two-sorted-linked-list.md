+++
title = "Intersection of two sorted linked list"
author = ["Seshal Jain"]
tags = ["ll"]
draft = true
weight = 2127
+++

<https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1>

```cpp
Node *findIntersection(Node *head1, Node *head2) {
  Node *a = head1;
  Node *b = head2;
  Node *head = NULL;
  Node *ptr;
  while (a && b) {
    if (a->data == b->data) {
      if (head == NULL) {
        Node *tmp = new Node(a->data);
        head = tmp;
        ptr = head;
      } else {
        Node *tmp = new Node(a->data);
        ptr->next = tmp;
        ptr = ptr->next;
      }
      a = a->next;
      b = b->next;
    } else if (a->data < b->data) {
      a = a->next;
    } else {
      b = b->next;
    }
  }
  return head;
}
```
