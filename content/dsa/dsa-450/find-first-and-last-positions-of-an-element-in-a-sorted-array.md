+++
title = "Find first and last positions of an element in a sorted array"
author = ["Seshal Jain"]
date = 2022-06-24T00:00:00+05:30
tags = ["search-sort"]
draft = false
weight = 2083
+++

<https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0>

```cpp
int firstOccurance(int arr[], int n, int x)
{
    int low = 0, high = n - 1, mid = -1;

    int index = -1;

    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (arr[mid] == x)
        {
            index = mid;
            high = mid - 1;
        }
        else if (arr[mid] > x)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }

    return index;
}

int lastOccurance(int arr[], int n, int x)
{
    int low = 0, high = n - 1, mid = -1;

    int index = -1;

    while (low <= high) {
      mid = low + (high - low) / 2;
      if (arr[mid] == x) {
        index = mid;
        low = mid + 1;
      } else if (arr[mid] > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return index;
}

vector<int> find(int arr[], int n, int x) {
  vector<int> v(2, 0);
  v[0] = firstOccurance(arr, n, x);
  v[1] = lastOccurance(arr, n, x);

  return v;
}
```
