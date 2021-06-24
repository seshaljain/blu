+++
title = "Count inversion"
author = ["Seshal Jain"]
date = 2021-06-24T00:00:00+05:30
tags = ["array", "search-sort"]
categories = ["done"]
draft = false
weight = 2015
+++

<https://practice.geeksforgeeks.org/problems/inversion-of-array/0>

Identical to merge sort, just need to add the number of inversions when `arr[i]

> arr[j]`(adding`mid - i + 1` is enough, because after sorting all elements to
> the right will automatically be inversion pairs)

```cpp
class Solution {
  long long merge(long long arr[], long long temp[], long long left,
                  long long right) {
    long long mid = left + (right - left) / 2;
    long long invCount = 0;

    long long i = left, j = mid + 1, k = left;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
        invCount += mid - i + 1;
      }
    }

    while (i <= mid) {
      temp[k++] = arr[i++];
    }
    while (j <= right) {
      temp[k++] = arr[j++];
    }
    for (i = left; i <= right; i++) {
      arr[i] = temp[i];
    }
    return invCount;
  }

  long long _mergeSort(long long arr[], long long temp[], long long left,
                       long long right) {
    long long mid, invCount = 0;

    if (left < right) {
      mid = left + (right - left) / 2;

      invCount += _mergeSort(arr, temp, left, mid);
      invCount += _mergeSort(arr, temp, mid + 1, right);

      invCount += merge(arr, temp, left, right);
    }

    return invCount;
  }

public:
  long long inversionCount(long long arr[], long long N) {
    long long temp[N];
    long long invCount = _mergeSort(arr, temp, 0, N - 1);

    return invCount;
  }
};
```
