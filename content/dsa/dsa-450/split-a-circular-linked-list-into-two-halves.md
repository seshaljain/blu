+++
title = "Split a circular linked list into two halves"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2133
+++

<https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1>

```cpp
void splitList(Node *head, Node **head1_ref, Node **head2_ref)
{
    if (head == nullptr) return;

    Node *fast = head, *slow = head;

    while (fast->next != head && fast->next->next != head) {
        slow = slow->next;
        fast = fast->next->next;
    }

    if (fast->next->next == head) {
        fast = fast->next;
    }

    *head1_ref = head;

    if (head->next != head) {
        *head2_ref = slow->next;
    }

    fast->next = slow->next;
    slow->next = head;
}
```
