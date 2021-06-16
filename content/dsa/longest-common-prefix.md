+++
title = "Longest common prefix"
author = ["Seshal Jain"]
tags = ["string", "done"]
draft = false
weight = 2069
+++

<https://leetcode.com/problems/longest-common-prefix/>

Divide and conquer, compare left and right subarrays.

```cpp
class Solution {
  string lcp(vector<string> &strs, int l, int r) {
    if (l == r)
      return strs[l];
    else {
      int mid = l + (r - l) / 2;
      string leftLCP = lcp(strs, l, mid);
      string rightLCP = lcp(strs, mid + 1, r);

      return commonPrefix(leftLCP, rightLCP);
    }
  }

  string commonPrefix(string left, string right) {
    int l = min(left.length(), right.length());

    int ctr = 0;
    while (ctr < l && left[ctr] == right[ctr]) {
      ctr++;
    }

    return left.substr(0, ctr);
  }

public:
  string longestCommonPrefix(vector<string> &strs) {
    if (strs.size() < 0)
      return "";

    return lcp(strs, 0, strs.size() - 1);
  }
};
```
