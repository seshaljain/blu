+++
title = "Reverse a string using stack"
author = ["Seshal Jain"]
tags = ["st-q"]
draft = true
weight = 2261
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
