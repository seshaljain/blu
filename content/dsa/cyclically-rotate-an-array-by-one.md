+++
title = "Cyclically rotate an array by one"
author = ["Seshal Jain"]
tags = ["done", "array"]
draft = false
weight = 2008
+++

<https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0>

Also works for rotation by N elements

```cpp
void reverseArr(int arr[], int r) {
  for (int i = 0; i < r / 2; i++) {
    int tmp = arr[i];
    arr[i] = arr[r - i - 1];
    arr[r - i - 1] = tmp;
  }
}
void rotate(int arr[], int n) {
  reverseArr(arr, n - 1);
  reverseArr(arr, n);
}
```
