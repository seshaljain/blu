+++
title = "Reverse an array"
author = ["Seshal Jain"]
tags = ["array"]
categories = ["done"]
draft = false
weight = 2002
+++

<https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/>

```cpp
void reverseArray(int arr[], int start, int end) {
  while (start < end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// reverseArray(arr, 0, n - 1);
```
