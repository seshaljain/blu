+++
title = "Why is quicksort preferred for arrays while merge sort for linked lists?"
author = ["Seshal Jain"]
date = 2021-06-23T00:00:00+05:30
tags = ["ll"]
categories = ["done"]
draft = false
weight = 2145
+++

Quicksort is also one of the efficient algorithms with the average time complexity of O(nlogn). But the worst-case time complexity is O(n^2). Also, variations of the quick sort like randomized quicksort are not efficient for the linked list because unlike arrays, random access in the linked list is not possible in O(1) time. If we sort the linked list using quicksort, we would end up using the head as a pivot element which may not be efficient in all scenarios.
