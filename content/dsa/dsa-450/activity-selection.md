+++
title = "Activity selection"
author = ["Seshal Jain"]
date = 2022-07-11T00:00:00+05:30
tags = ["greedy"]
draft = false
weight = 2209
+++

<https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/>

PQ of asc order end time, increase counter if next start &gt;= current end

```cpp
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        sort(points.begin(),points.end(), [&] (const vector<int> &a, const vector<int> &b) -> bool {
            return a[1] < b[1];
        });

        int end = points[0][1];
        int arrows = 1;
        for(int i = 1; i < points.size(); i++) {
            if(points[i][0] > end) {
                arrows++;
                end = points[i][1];
            }
        }
        return arrows;
    }
};
```
