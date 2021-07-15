+++
title = "Clone a linked list with next and random pointer"
author = ["Seshal Jain"]
date = 2021-07-14T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2148
+++

<https://leetcode.com/problems/copy-list-with-random-pointer/>

Inefficient

```cpp
class Solution {
public:
  Node *copyRandomList(Node *head) {
    map<Node *, Node *> mp;

    for (Node *c = head; c != nullptr; c = c->next)
      mp[c] = new Node(c->val);

    for (Node *c = head; c != nullptr; c = c->next) {
      mp[c]->next = mp[c->next];
      mp[c]->random = mp[c->random];
    }

    return mp[head];
  }
};
```

Optimised

```cpp
class Solution {
public:
  Node *copyRandomList(Node *head) {
    Node *iter = head;
    Node *front = head;

    while (iter != nullptr) {
      front = iter->next;

      Node *copy = new Node(iter->val);
      iter->next = copy;
      copy->next = front;

      iter = front;
    }

    iter = head;
    while (iter != nullptr) {
      if (iter->random != nullptr) {
        iter->next->random = iter->random->next;
      }
      iter = iter->next->next;
    }

    iter = head;
    Node *pseudoHead = new Node(0);
    Node *copy = pseudoHead;

    while (iter != nullptr) {
      front = iter->next->next;

      copy->next = iter->next;

      iter->next = front;

      copy = copy->next;
      iter = front;
    }

    return pseudoHead->next;
  }
};
```
