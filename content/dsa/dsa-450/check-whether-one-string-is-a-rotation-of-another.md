+++
title = "Check whether one string is a rotation of another"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2047
+++

<https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/>

```cpp
bool areRotations(string str1, string str2) {
  if (str1.length() != str2.length())
    return false;

  string temp = str1 + str1;
  return (temp.find(str2) != string::npos);
}
```
