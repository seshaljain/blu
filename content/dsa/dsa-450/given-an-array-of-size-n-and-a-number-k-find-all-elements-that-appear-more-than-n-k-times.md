+++
title = "Given an array of size N and a number K, find all elements that appear more than N/K times"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2023
+++

<https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/>

GfG has a O(nk) time, O(k - 1) space solution, something about tetris

```cpp
class Solution {
public:
  int countOccurence(int arr[], int n, int k) {
    map<int, int> freq;

    for (int i = 0; i < n; i++) {
      freq[arr[i]]++;
    }

    int ctr = 0;

    for (auto it : freq) {
      if (it.second > n / k)
        ctr++;
    }

    return ctr;
  }
};
```
