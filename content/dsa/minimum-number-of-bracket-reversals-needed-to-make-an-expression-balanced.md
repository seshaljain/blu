+++
title = "Minimum number of bracket reversals needed to make an expression balanced"
author = ["Seshal Jain"]
tags = ["string"]
categories = ["done"]
draft = false
weight = 2063
+++

<https://practice.geeksforgeeks.org/problems/count-the-reversals/0>

}{{}}{{{
Remove all valid pairs, remaining string is like }}}...{{{...
ans = ceil(lBraces) + ceil(rBraces) in remaining string

```cpp
int countRev(string s) {
  int n = s.size();
  if (n % 2 != 0) return -1;

  stack<char> st;

  for (int i = 0; i < n; i++)
  {
    if (s[i] == '}' && !st.empty())
    {
      if (st.top() == '{')
        st.pop();
      else
        st.push(s[i]);
    }
    else
      st.push(s[i]);
  }

  int lCount = 0;

  while (!st.empty() && st.top() == '{')
  {
    lCount++;
    st.pop();
  }
  int rCount = st.size();

  return (ceil((double)lCount / 2) + ceil((double)rCount / 2));
}
```
