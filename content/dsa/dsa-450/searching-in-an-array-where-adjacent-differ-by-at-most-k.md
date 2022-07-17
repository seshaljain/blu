+++
title = "Searching in an array where adjacent differ by at most K"
author = ["Seshal Jain"]
tags = ["search-sort"]
draft = true
weight = 2091
+++

<https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/>

```cpp
int search(int arr[], int n, int x) {
  int i = 0;
  while (i < n) {
    if (arr[i] == x)
      return i;

    i += max(1, abs(arr[i] - x) / k);
  }

  cout << "Number not present";
  return -1;
}
```
