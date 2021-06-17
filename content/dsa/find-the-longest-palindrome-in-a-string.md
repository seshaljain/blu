+++
title = "Find the longest palindrome in a string"
author = ["Seshal Jain"]
tags = ["string"]
categories = ["done"]
draft = false
weight = 2052
+++

<https://leetcode.com/problems/longest-palindromic-substring/>

Expand from center, check for even and odd palindromes

```cpp
string longestPalindrome(string s) {
  if (s.size() < 1)
    return "";
  int start = 0;
  int l = s.size();
  int maxLength = 1;

  for (int i = 0; i < l; i++) {
    // Odd
    int low = i - 1, high = i;
    while (low >= 0 && high < l && s[low] == s[high]) {
      if (high - low + 1 > maxLength) {
        start = low;
        maxLength = high - low + 1;
      }
      low--;
      high++;
    }
    // Even
    low = i - 1, high = i + 1;
    while (low >= 0 && high < l && s[low] == s[high]) {
      if (high - low + 1 > maxLength) {
        start = low;
        maxLength = high - low + 1;
      }
      low--;
      high++;
    }
  }
  return s.substr(start, maxLength);
}
```
