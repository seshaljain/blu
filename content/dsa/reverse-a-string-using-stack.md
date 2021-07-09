+++
title = "Reverse a string using stack"
author = ["Seshal Jain"]
date = 2021-07-08T00:00:00+05:30
tags = ["st-q"]
categories = ["done"]
draft = false
weight = 2263
+++

<https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1>

```cpp
char *reverse(char *S, int len) {
  stack<char> st;

  for (int i = 0; i < len; i++) {
    st.push(S[i]);
  }

  char *rev = new char(len + 1);

  int i = 0;
  while (!st.empty()) {
    rev[i++] = st.top();
    st.pop();
  }
  rev[i] = '\0';

  return rev;
}
```
