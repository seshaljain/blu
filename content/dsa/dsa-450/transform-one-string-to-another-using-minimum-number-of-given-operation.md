+++
title = "Transform one string to another using minimum number of given operation"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2080
+++

<https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/>

1.  Check relative character frequencies &amp; length of strings
2.  Start from end, increase `res` till character found in B

Doing this because insertion is only allowed in front of A

```cpp
#include <bits/stdc++.h>
using namespace std;

int minOps(string A, string B) {
  int n = A.length(), m = B.length();

  if (n != m) return -1;

  map<char, pair<int, int>> mp;

  for (int i = 0; i < n; i++) {
    mp[A[i]].first++;
    mp[B[i]].second++;
  }

  for (auto it : mp) {
    if (it.second.first != it.second.second) return -1;
  }

  int res = 0;
  int i = m - 1, j = n - 1;
  while (i >= 0) {
    while (i >= 0 && A[i] != B[j]) {
      i--;
      res++;
    }

    if (i >= 0) {
      i--;
      j--;
    }
  }

  return res;
}

int main() {
  string a, b;
  cin >> a >> b;
  cout << minOps(a, b);
  return 0;
}
```
