+++
title = "Balanced parenthesis"
author = ["Seshal Jain"]
tags = ["done", "string", "st-q"]
draft = false
weight = 2058
+++

<https://practice.geeksforgeeks.org/problems/parenthesis-checker/0>

```cpp
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
```
