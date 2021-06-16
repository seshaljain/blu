+++
title = "Implement 2 stack in an array"
author = ["Seshal Jain"]
tags = ["done", "st-q"]
draft = false
weight = 2260
+++

<https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1>

void twoStacks::push2(int x) {
if (abs(top1 - top2) >= 1) {
top2--;
arr[top2] = x;
}
}

int twoStacks::pop1() {
int x = -1;
if (top1 >= 0) {
x = arr[top1];
top1--;
}
return x;
}

int twoStacks::pop2() {
int x = -1;
if (top2 < size) {
x = arr[top2];
top2++;
}
return x;
}
\#+end_src
