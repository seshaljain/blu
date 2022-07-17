+++
title = "Implement 2 stack in an array"
author = ["Seshal Jain"]
tags = ["st-q"]
draft = true
weight = 2258
+++

<https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1>

```cpp
void twoStacks ::push1(int x) {
  if (abs(top1 - top2) >= 1) {
    top1++;
    arr[top1] = x;
  }
}

void twoStacks ::push2(int x) {
  if (abs(top1 - top2) >= 1) {
    top2--;
    arr[top2] = x;
  }
}

int twoStacks ::pop1() {
  int x = -1;
  if (top1 >= 0) {
    x = arr[top1];
    top1--;
  }
  return x;
}

int twoStacks ::pop2() {
  int x = -1;
  if (top2 < size) {
    x = arr[top2];
    top2++;
  }
  return x;
}
```
