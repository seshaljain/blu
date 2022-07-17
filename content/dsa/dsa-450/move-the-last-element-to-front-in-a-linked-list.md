+++
title = "Move the last element to front in a linked list"
author = ["Seshal Jain"]
date = 2022-06-23T00:00:00+05:30
tags = ["ll"]
draft = false
weight = 2124
+++

<https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/>

```cpp
void moveToFront(Node **head) {
  if (*head == nullptr || (*head)->next == nullptr)
    return;

  Node *prev = nullptr;
  Node *tmp = *head;

  while (tmp->next != nullptr) {
    prev = tmp;
    tmp = tmp->next;
  }

  prev->next = nullptr;
  tmp->next = *head;
  *head = tmp;
}
```
