+++
title = "Reverse an array"
author = ["Seshal Jain"]
date = 2022-07-12T00:00:00+05:30
tags = ["array"]
draft = false
weight = 2001
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
