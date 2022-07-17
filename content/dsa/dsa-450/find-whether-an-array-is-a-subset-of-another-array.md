+++
title = "Find whether an array is a subset of another array"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2024
+++

<https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0>

Can also insert into set twice, and check if size is the same.

```cpp
string isSubset(int arr1[], int arr2[], int m, int n) {
  int i = 0, j = 0;

  if (m < n)
    return "No";

  sort(arr1, arr1 + m);
  sort(arr2, arr2 + n);

  while (i < n && j < m) {
    if (arr1[j] < arr2[i])
      j++;
    else if (arr1[j] == arr2[i]) {
      j++;
      i++;
    }

    else if (arr1[j] > arr2[i])
      return "No";
  }

  return (i < n) ? "No" : "Yes";
}
```
