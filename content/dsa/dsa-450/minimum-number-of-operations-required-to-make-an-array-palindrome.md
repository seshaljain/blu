+++
title = "Minimum number of merge operations required to make an array palindrome"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2031
+++

<https://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/>

```cpp
int findMinOps(int arr[], int n) {
  int ans = 0;

  for (int i = 0, j = n - 1; i <= j;) {
    if (arr[i] == arr[j]) {
      i++;
      j--;
    } else if (arr[i] > arr[j]) {
      j--;
      arr[j] += arr[j + 1];
      ans++;
    } else {
      i++;
      arr[i] += arr[i - 1];
      ans++;
    }
  }

  return ans;
}
```
