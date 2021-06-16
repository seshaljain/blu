+++
title = "Trapping rain water"
author = ["Seshal Jain"]
tags = ["done", "array"]
draft = false
weight = 2027
+++

<https://practice.geeksforgeeks.org/problems/trapping-rain-water/0>

Find lMax, rMax
ans += min(lMax, rMax) - currHeight

```cpp
int trap(vector<int> &height) {
  if (height.empty())
    return 0;

  int n = height.size();
  vector<pair<int, int>> maxHeights(n);

  maxHeights[0].first = height[0];
  maxHeights[n - 1].second = height[n - 1];

  for (int i = 1; i < n; i++) {
    maxHeights[i].first = max(height[i], maxHeights[i - 1].first);
  }
  for (int i = n - 2; i >= 0; i--) {
    maxHeights[i].second = max(height[i], maxHeights[i + 1].second);
  }

  int rain = 0;

  for (int i = 0; i < n; i++) {
    rain += min(maxHeights[i].first, maxHeights[i].second) - height[i];
  }

  return rain;
}
```
