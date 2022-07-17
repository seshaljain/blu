+++
title = "Balanced parenthesis"
author = ["Seshal Jain"]
date = 2022-06-28T00:00:00+05:30
tags = ["string", "st-q"]
draft = false
weight = 2056
+++

<https://practice.geeksforgeeks.org/problems/parenthesis-checker/0>

```cpp
class Solution {
public:
  bool ispar(string x) {
    if (x.size() % 2 != 0)
      return false;

    stack<char> st;

    for (int i = 0; i < x.size(); i++) {
      if (x[i] == '}') {
        if (st.top() == '{')
          st.pop();
      }
      if (x[i] == ']') {
        if (st.top() == '[')
          st.pop();
      }
      if (x[i] == ')') {
        if (st.top() == '(')
          st.pop();
      } else {
        st.push(x[i]);
      }
    }

    return (st.empty() == true);
  }
};
```
