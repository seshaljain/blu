+++
title = "Print all subsequences of a string"
author = ["Seshal Jain"]
date = 2021-06-17T00:00:00+05:30
tags = ["string"]
draft = false
weight = 2053
+++

<https://www.geeksforgeeks.org/print-subsequences-string/>

```cpp
void printSubsequence(string input, string output) {
  if (input.empty()) {
    cout << output << endl;
    return;
  }

  printSubsequence(input.substr(1), output + input[0]);
  printSubsequence(input.substr(1), output);
}

// printSubsequence(input, "");
```
