+++
title = "Check whether a string is a valid shuffle of two strings"
author = ["Seshal Jain"]
tags = ["string"]
categories = ["done"]
draft = false
weight = 2050
+++

<https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings>

```cpp
bool shuffleCheck(string first, string second, string result) {
  if (first.size() + second.size() != result.size()) {
    return false;
  }

  int i = 0, j = 0, k = 0;

  while (k != result.size()) {
    if (i < first.size() && first[i] == result[i])
      i++;
    else if (j < second.size() && second[j] == result[k])
      j++;
    else {
      return false;
    }

    k++;
  }

  if (i < first.size() || j < second.size()) {
    return false;
  }

  return true;
}
```
