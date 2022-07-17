+++
title = "Print all subsequences of a string"
author = ["Seshal Jain"]
tags = ["string"]
draft = true
weight = 2051
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
