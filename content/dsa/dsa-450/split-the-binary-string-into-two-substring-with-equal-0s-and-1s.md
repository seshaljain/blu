+++
title = "Split the binary string into two substring with equal 0s and 1s"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2052
+++

<https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/>

```cpp
int maxSubStr(string str) {
  int n = str.length();
  int count0 = 0, count1 = 0;

  int cnt = 0;
  for (int i = 0; i < n; i++) {
    if (str[i] == '0') {
      count0++;
    } else if (str[i] == '1') {
      count1++;
    }

    if (count0 == count1) {
      cnt++;
    }
  }

  if (cnt == 0) {
    return -1;
  }

  return cnt;
}
```
