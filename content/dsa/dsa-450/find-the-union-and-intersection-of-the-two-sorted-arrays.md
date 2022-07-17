+++
title = "Find the union and intersection of the two sorted arrays"
author = ["Seshal Jain"]
tags = ["array"]
draft = true
weight = 2006
+++

<https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0>


## Union {#union}

Does not handle duplicates

```cpp
class Solution {
public:
  int doUnion(int a[], int n, int b[], int m) {
    int i = 0, j = 0;
    sort(a, a + n);
    sort(b, b + m);
    vector<int> v;
    while (i < n && j < m) {
      if (a[i] < b[j]) {
        v.push_back(a[i]);
        i++;
      } else if (a[i] > b[j]) {
        v.push_back(b[j]);
        j++;
      } else {
        v.push_back(a[i]);
        // or
        // v.push_back(b[j]);
        i++;
        j++;
      }
    }

    while (i < n)
      v.push_back(a[i++]);

    while (j < m)
      v.push_back(b[j++]);

    return v.size();
  }
};
```

Handles duplicates

```cpp
class Solution{
    public:
    int doUnion(int a[], int n, int b[], int m)  {
        set<int> st;
        for (int i = 0; i < n; i++) {
            st.insert(a[i]);
        }

        for (int i = 0; i < m; i++) {
            st.insert(b[i]);
        }

        return st.size();
    }
};
```


## Intersection {#intersection}

<https://leetcode.com/problems/intersection-of-two-arrays/>

```cpp
class Solution {
public:
  vector<int> intersection(vector<int> &nums1, vector<int> &nums2) {
    int i = 0, j = 0;
    int n = nums1.size(), m = nums2.size();
    sort(nums1.begin(), nums1.end());
    sort(nums2.begin(), nums2.end());

    set<int> st;
    while (i < n && j < m) {
      if (nums1[i] < nums2[j]) {
        i++;
      } else if (nums1[i] > nums2[j]) {
        j++;
      } else {
        st.insert(nums1[i]);
        // or
        // v.push_back(b[j]);
        i++;
        j++;
      }
    }
    return vector<int>(st.begin(), st.end());
  }
};
```
