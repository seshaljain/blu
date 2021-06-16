+++
title = "Move all the negative elements to one side of the array"
author = ["Seshal Jain"]
tags = ["done", "array"]
draft = false
weight = 2006
+++

<https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/>

Cases:

1.  negative negative: i+=1
2.  positive negative: swap, i++, j--
3.  negative positive: j--
4.  positive positive: i++, j--

<!--listend-->

```cpp
void shiftall(int arr[], int n) {
  int i = 0, j = n - 1;

  while (i <= j) {
    if (arr[i] < 0 && arr[j] < 0) {
      i++;
    } else if (arr[i] > 0 && arr[j] < 0) {
      swap(arr[i], arr[j]);
      i++;
      j--;
    } else if (arr[i] > 0 && arr[j] > 0)
      j--;
    else {
      i++;
      j--;
    }
  }
}
```
