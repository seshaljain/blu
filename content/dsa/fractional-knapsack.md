+++
title = "Fractional knapsack"
author = ["Seshal Jain"]
tags = ["greedy"]
categories = ["done"]
draft = false
weight = 2215
+++

<https://practice.geeksforgeeks.org/problems/fractional-knapsack/0>

```cpp
double fractionalKnapsack(int W, Item arr[], int n) {
    sort(arr, arr + n, [](const Item &a, const Item &b) {
      return ((double) a.value / a.weight) > (double) b.value / b.weight;
    });

    int currWeight = 0;
    double cost = 0;

    for (int i = 0; i < n; i++) {
      if (arr[i].weight + currWeight <= W) {
        currWeight += arr[i].weight;
        cost += arr[i].value;
      } else {
        cost += (arr[i].value / (double)arr[i].weight) * (W - currWeight);
        break;
      }
    }
    return cost;
}
```
