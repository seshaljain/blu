+++
title = "Kth smallest number again"
author = ["Seshal Jain"]
tags = ["done", "search-sort"]
draft = false
weight = 2105
+++

<https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/>

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve() {
  int n, q;
  cin >> n >> q;
  vector<pair<int, int>> v(n);
  for (auto &it : v)
    cin >> it.first >> it.second;
  sort(v.begin(), v.end());
  int idx = 0;
  for (int i = 1; i < n; i++) {
    if (v[idx].second >= v[i].first) {
      v[idx].second = max(v[idx].second, v[i].second);
    } else {
      idx++;
      v[idx] = v[i];
    }
  }

  while (q--) {
    int k;
    cin >> k;
    int ans = -1;
    for (int i = 0; i <= idx; i++) {
      if (v[i].second - v[i].first + 1 >= k) {
        ans = v[i].first + k - 1;
        break;
      } else {
        k -= v[i].second - v[i].first + 1;
      }
    }

    cout << ans << "\n";
  }
}

signed main() {
  int t;
  cin >> t;
  while (t--) {
    solve();
  }
  return 0;
}
```
