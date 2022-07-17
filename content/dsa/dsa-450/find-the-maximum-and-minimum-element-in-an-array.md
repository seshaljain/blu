+++
title = "Find the maximum and minimum element in an array"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2002
+++

<https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/>

Divide and conquer

```cpp
struct Pair {
  int min;
  int max;
};

struct Pair getMinMax(int arr[], int low, int high) {
  struct Pair minmax, mml, mmr;
  int mid;

  if (low == high) {
    minmax.max = arr[low];
    minmax.min = arr[low];
    return minmax;
  }

  if (high - low == 1) {
    if (arr[low] > arr[high]) {
      minmax.max = arr[low];
      minmax.min = arr[high];
    } else {
      minmax.max = arr[high];
      minmax.min = arr[low];
    }
    return minmax;
  }

  mid = low + (high - low) / 2;
  mml = getMinMax(arr, low, mid);
  mmr = getMinMax(arr, mid + 1, high);

  minmax.min = min(mml.min, mmr.min);
  minmax.max = max(mml.max, mmr.max);

  return minmax;
}

// struct Pair minmax = getMinMax(arr, 0, N - 1);
```
