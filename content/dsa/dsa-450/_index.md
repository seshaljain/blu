+++
title = "DSA 450 [42/413]"
author = ["Seshal Jain"]
date = 1970-01-01T00:00:00+05:30
draft = false
+++

## <span class="org-todo done DONE">DONE</span> Reverse an array <span class="tag"><span class="array">array</span></span> {#reverse-an-array}

<https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/>

```cpp
void reverseArray(int arr[], int start, int end) {
  while (start < end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// reverseArray(arr, 0, n - 1);
```


## <span class="org-todo todo TODO">TODO</span> Find the maximum and minimum element in an array <span class="tag"><span class="array">array</span></span> {#find-the-maximum-and-minimum-element-in-an-array}

<https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/>

Divide and conquer

```cpp
struct Pair {
  int min;
  int max;
};

struct Pair getMinMax(int arr[], int low, int high) {
  struct Pair minmax, mml, mmr;
  int mid;

  if (low == high) {
    minmax.max = arr[low];
    minmax.min = arr[low];
    return minmax;
  }

  if (high - low == 1) {
    if (arr[low] > arr[high]) {
      minmax.max = arr[low];
      minmax.min = arr[high];
    } else {
      minmax.max = arr[high];
      minmax.min = arr[low];
    }
    return minmax;
  }

  mid = low + (high - low) / 2;
  mml = getMinMax(arr, low, mid);
  mmr = getMinMax(arr, mid + 1, high);

  minmax.min = min(mml.min, mmr.min);
  minmax.max = max(mml.max, mmr.max);

  return minmax;
}

// struct Pair minmax = getMinMax(arr, 0, N - 1);
```


## <span class="org-todo todo TODO">TODO</span> Find the Kth max and min element in an array <span class="tag"><span class="array">array</span><span class="heap">heap</span></span> {#find-the-kth-max-and-min-element-in-an-array}

<https://practice.geeksforgeeks.org/problems/kth-smallest-element/0>

1.  Make priority queue of size `k`, insert first `k` elements from the array
2.  For the remaining elements, pop and insert into pq if element is smaller than top

<!--listend-->

```cpp
class Solution {
public:
  int kthSmallest(int arr[], int l, int r, int k) {
    priority_queue<int, vector<int>> pq(arr, arr + k);

    int n = r - l + 1;

    for (int i = k; i < n; i++) {
      if (arr[i] < pq.top()) {
        pq.pop();
        pq.push(arr[i]);
      }
    }

    return pq.top();
  }
};
```


## <span class="org-todo done DONE">DONE</span> Sort an array of 0s, 1s and 2s <span class="tag"><span class="array">array</span></span> {#sort-an-array-of-0s-1s-and-2s}

<https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0>

```cpp
class Solution {
public:
  void sort012(int arr[], int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
      if (arr[mid] == 0) {
        swap(arr[mid], arr[low]);
        low++;
        mid++;
      } else if (arr[mid] == 1) {
        mid++;
      } else {
        swap(arr[mid], arr[high]);
        high--;
      }
    }
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Move all the negative elements to one side of the array <span class="tag"><span class="array">array</span></span> {#move-all-the-negative-elements-to-one-side-of-the-array}

<https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/>

Cases:

1.  negative negative: i++
2.  positive positive: j--
3.  negative positive: i++, j--
4.  positive negative: swap, i++, j--

<!--listend-->

```cpp
void shiftall(int arr[], int n) {
  int i = 0, j = n - 1;

  while (i <= j) {
    if (arr[i] < 0 && arr[j] < 0) {
      i++;
    } else if (arr[i] > 0 && arr[j] > 0) {
      j--;
    } else if (arr[i] < 0 && arr[j] > 0) {
      i++;
      j--;
    } else {
      swap(arr[i], arr[j]);
      i++;
      j--;
    }
  }
}
```


## <span class="org-todo todo TODO">TODO</span> Find the union and intersection of the two sorted arrays <span class="tag"><span class="array">array</span></span> {#find-the-union-and-intersection-of-the-two-sorted-arrays}

<https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0>


### Union {#union}

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


### Intersection {#intersection}

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


## <span class="org-todo todo TODO">TODO</span> Cyclically rotate an array by one <span class="tag"><span class="array">array</span></span> {#cyclically-rotate-an-array-by-one}

<https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0>

Also works for rotation by N elements

```cpp
void reverseArr(int arr[], int r) {
  for (int i = 0; i < r / 2; i++) {
    int tmp = arr[i];
    arr[i] = arr[r - i - 1];
    arr[r - i - 1] = tmp;
  }
}
void rotate(int arr[], int n) {
  reverseArr(arr, n - 1);
  reverseArr(arr, n);
}
```


## <span class="org-todo todo TODO">TODO</span> Minimise the maximum difference between heights <span class="tag"><span class="array">array</span></span> {#minimise-the-maximum-difference-between-heights}

<https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1>

```cpp
class Solution {
public:
  int getMinDiff(int arr[], int n, int k) {
    sort(arr, arr + n);
    int minEle, maxEle;
    int result = arr[n - 1] - arr[0];

    for (int i = 1; i <= n - 1; i++) {
      maxEle = max(arr[i - 1] + k, arr[n - 1] - k);
      minEle = min(arr[0] + k, arr[i] - k);

      result = min(result, maxEle - minEle);
    }
    return result;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Minimum number of jumps to reach end of an array <span class="tag"><span class="array">array</span></span> {#minimum-number-of-jumps-to-reach-end-of-an-array}

<https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0>

```cpp
class Solution {
public:
    int minJumps(int arr[], int n) {
        int jumps = 0;
        int currJumpEnd = 0;
        int maxReachableIndex = 0;

        for (int i = 0; i < n; i++) {
            if (i == n - 1)
                return (currJumpEnd >= n - 1) ? jumps : -1;

            maxReachableIndex = max(maxReachableIndex, i + arr[i]);
            if (i == currJumpEnd) {
                jumps++;
                currJumpEnd = maxReachableIndex;
            }
        }

        return -1;
    }
};
```


## <span class="org-todo todo TODO">TODO</span> Find the duplicate in an array of N+1 integers <span class="tag"><span class="array">array</span></span> {#find-the-duplicate-in-an-array-of-n-plus-1-integers}

<https://leetcode.com/problems/find-the-duplicate-number/>

Floyd's tortoise &amp; hare algorithm

```cpp
class Solution {
public:
  int findDuplicate(vector<int> &nums) {
    int slow = nums[0], fast = nums[0];

    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow != fast);

    fast = nums[0];
    while (slow != fast) {
      fast = nums[fast];
      slow = nums[slow];
    }

    return fast;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Kadane's algorithm <span class="tag"><span class="array">array</span><span class="dp">dp</span></span> {#kadane-s-algorithm}

<https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0>

DP without array

```cpp
class Solution {
public:
  int maxSubarraySum(int arr[], int n) {

    int sum = INT_MIN, currSum = 0, i = 0;

    while (i < n) {
      currSum += arr[i];
      sum = max(sum, currSum);

      if (currSum < 0)
        currSum = 0;
      i++;
    }
    return sum;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Merge intervals <span class="tag"><span class="array">array</span></span> {#merge-intervals}

<https://leetcode.com/problems/merge-intervals/>

```cpp
class Solution {
public:
  vector<vector<int>> merge(vector<vector<int>> &intervals) {
    vector<vector<int>> mergedIntervals;

    if (intervals.empty())
      return mergedIntervals;

    vector<int> currInt = intervals[0];

    for (auto it : intervals) {
      if (it[0] <= currInt[1]) {
        currInt[1] = max(it[1], currInt[1]);
      } else {
        mergedIntervals.push_back(currInt);
        currInt = it;
      }
    }
    mergedIntervals.push_back(currInt);

    return mergedIntervals;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Next permutation <span class="tag"><span class="array">array</span></span> {#next-permutation}

<https://leetcode.com/problems/next-permutation/>

1.  Find non-increasing sequence from right
2.  Find just greater number from right
3.  Swap them
4.  Reverse from `i` to end

<!--listend-->

```cpp
class Solution {
public:
  void nextPermutation(vector<int> &nums) {
    int i = nums.size() - 2;

    while (i >= 0 && nums[i + 1] <= nums[i]) {
      i--;
    }

    if (i >= 0) {
      int j = nums.size() - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      swap(nums[i], nums[j]);
    }

    reverse(nums.begin() + i + 1, nums.end());
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Count inversion <span class="tag"><span class="array">array</span><span class="search_sort">search-sort</span></span> {#count-inversion}

<https://practice.geeksforgeeks.org/problems/inversion-of-array/0>

Identical to merge sort, just need to add the number of inversions when `arr[i]
> arr[j]` (adding `mid - i + 1` is enough, because after sorting all elements to
the right will automatically be inversion pairs)

```cpp
class Solution {
  long long merge(long long arr[], long long temp[], long long left,
                  long long right) {
    long long mid = left + (right - left) / 2;
    long long invCount = 0;

    long long i = left, j = mid + 1, k = left;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
        invCount += mid - i + 1;
      }
    }

    while (i <= mid) {
      temp[k++] = arr[i++];
    }
    while (j <= right) {
      temp[k++] = arr[j++];
    }
    for (i = left; i <= right; i++) {
      arr[i] = temp[i];
    }
    return invCount;
  }

  long long _mergeSort(long long arr[], long long temp[], long long left,
                       long long right) {
    long long mid, invCount = 0;

    if (left < right) {
      mid = left + (right - left) / 2;

      invCount += _mergeSort(arr, temp, left, mid);
      invCount += _mergeSort(arr, temp, mid + 1, right);

      invCount += merge(arr, temp, left, right);
    }

    return invCount;
  }

public:
  long long inversionCount(long long arr[], long long N) {
    long long temp[N];
    long long invCount = _mergeSort(arr, temp, 0, N - 1);

    return invCount;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Best time to buy and sell stock <span class="tag"><span class="array">array</span></span> {#best-time-to-buy-and-sell-stock}

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock/>


### Only 1 transaction is allowed {#only-1-transaction-is-allowed}

One pass, just need to check the lowest valley/highest peak (and their difference)

This problem reduces to maximum difference between two elements when larger
element must come after smaller element

```cpp
class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int n = prices.size();
    int minPrice = INT_MAX, maxProfit = 0;

    for (int i = 0; i < n; i++) {
      minPrice = min(minPrice, prices[i]);
      maxProfit = max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
  }
};
```


### Maximum profit by buying and selling a share at most twice {#maximum-profit-by-buying-and-selling-a-share-at-most-twice}

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/>

```cpp
class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int n = prices.size();

    vector<int> profit(n, 0);

    int maxPrice = prices[n - 1];
    for (int i = n - 2; i >= 0; i--) {
      maxPrice = max(maxPrice, prices[i]);
      profit[i] = max(profit[i + 1], maxPrice - prices[i]);
    }

    int minPrice = prices[0];
    for (int i = 1; i < n; i++) {
      minPrice = min(minPrice, prices[i]);
      profit[i] = max(profit[i - 1], profit[i] + (prices[i] - minPrice));
    }

    return profit[n - 1];
  }
};
```


### Any number of transactions are allowed {#any-number-of-transactions-are-allowed}

<https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int maxProfit(int k, vector<int> &prices) {
    int n = prices.size();
    if (n == 0)
      return 0;

    for (int i = 0; i <= k; i++) {
      int minPrice = prices[0];
      for (int j = 0; j < n; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else {
          minPrice = min(minPrice, prices[j] - dp[i - 1][j - 1]);
          dp[i][j] = max(dp[i][j - 1], prices[j] - minPrice);
        }
      }
    }
    return dp[k][n - 1];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find all pairs on integer array whose sum is equal to K <span class="tag"><span class="array">array</span></span> {#find-all-pairs-on-integer-array-whose-sum-is-equal-to-k}

<https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1>

```cpp
class Solution {
public:
  int getPairsCount(int arr[], int n, int k) {
    map<int, int> mp;

    for (int i = 0; i < n; i++)
      mp[arr[i]]++;

    int ctr = 0;

    for (int i = 0; i < n; i++) {
      ctr += mp[k - arr[i]];

      if (k - arr[i] == arr[i])
        ctr--;
    }

    return ctr / 2;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find common elements in 3 sorted arrays <span class="tag"><span class="array">array</span></span> {#find-common-elements-in-3-sorted-arrays}

<https://practice.geeksforgeeks.org/problems/common-elements1132/1>

```cpp
class Solution {
public:
  vector<int> common_element(vector<int> v1, vector<int> v2) {
    vector<int> v;
    sort(v1.begin(), v1.end());
    sort(v2.begin(), v2.end());

    int i = 0, j = 0;
    int n1 = v1.size(), n2 = v2.size();
    while (i < n1 && j < n2) {
      if (v1[i] == v2[j]) {
        v.push_back(v1[i]);
        i++;
        j++;
      } else if (v1[i] < v2[j]) {
        i++;
      } else {
        j++;
      }
    }

    return v;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Rearrange the array in alternating positive and negative items with O(1) extra space <span class="tag"><span class="array">array</span></span> {#rearrange-the-array-in-alternating-positive-and-negative-items-with-o--1--extra-space}

<https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/>


## <span class="org-todo done DONE">DONE</span> Find if there is any subarray with sum equal to 0 <span class="tag"><span class="array">array</span></span> {#find-if-there-is-any-subarray-with-sum-equal-to-0}

<https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0>

```cpp
class Solution {
public:
  bool subArrayExists(int arr[], int n) {
    int pSum[n];
    partial_sum(arr, arr + n, pSum);

    set<int> st;

    for (int i = 0; i < n; i++) {
      if (pSum[i] == 0 || st.find(pSum[i]) != st.end())
        return true;
      st.insert(pSum[i]);
    }

    return false;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find factorial of a large number <span class="tag"><span class="array">array</span></span> {#find-factorial-of-a-large-number}

<https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0>


## <span class="org-todo done DONE">DONE</span> Find maximum product subarray <span class="tag"><span class="array">array</span></span> {#find-maximum-product-subarray}

<https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1>

```cpp
class Solution {
public:
  int maxProduct(vector<int> &nums) {
    int n = nums.size();
    int maxP = nums[0], currMaxP = nums[0], currMinP = nums[0],
        prevMinP = nums[0], prevMaxP = nums[0];

    for (int i = 1; i < n; i++) {
      currMinP = min({prevMinP * nums[i], prevMaxP * nums[i], nums[i]});
      currMaxP = max({prevMinP * nums[i], prevMaxP * nums[i], nums[i]});
      maxP = max(maxP, currMaxP);
      prevMinP = currMinP;
      prevMaxP = currMaxP;
    }

    return maxP;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Find longest consecutive subsequence <span class="tag"><span class="array">array</span></span> {#find-longest-consecutive-subsequence}

<https://leetcode.com/problems/longest-consecutive-sequence/submissions/>

```cpp
class Solution {
public:
  int longestConsecutive(vector<int> &nums) {
    set<int> st(nums.begin(), nums.end());
    int maxLength = 0;

    for (auto it : st) {
      if (st.find(it - 1) == st.end()) {
        int currentNum = it;
        int currLength = 1;
        while (st.find(currentNum + 1) != st.end()) {
          currentNum += 1;
          currLength += 1;
        }

        maxLength = max(maxLength, currLength);
      }
    }
    return maxLength;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Given an array of size N and a number K, find all elements that appear more than N/K times <span class="tag"><span class="array">array</span></span> {#given-an-array-of-size-n-and-a-number-k-find-all-elements-that-appear-more-than-n-k-times}

<https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/>

GfG has a O(nk) time, O(k - 1) space solution, something about tetris

```cpp
class Solution {
public:
  int countOccurence(int arr[], int n, int k) {
    map<int, int> freq;

    for (int i = 0; i < n; i++) {
      freq[arr[i]]++;
    }

    int ctr = 0;

    for (auto it : freq) {
      if (it.second > n / k)
        ctr++;
    }

    return ctr;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find whether an array is a subset of another array <span class="tag"><span class="array">array</span></span> {#find-whether-an-array-is-a-subset-of-another-array}

<https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0>

Can also insert into set twice, and check if size is the same.

```cpp
string isSubset(int arr1[], int arr2[], int m, int n) {
  int i = 0, j = 0;

  if (m < n)
    return "No";

  sort(arr1, arr1 + m);
  sort(arr2, arr2 + n);

  while (i < n && j < m) {
    if (arr1[j] < arr2[i])
      j++;
    else if (arr1[j] == arr2[i]) {
      j++;
      i++;
    }

    else if (arr1[j] > arr2[i])
      return "No";
  }

  return (i < n) ? "No" : "Yes";
}
```


## <span class="org-todo todo TODO">TODO</span> Find the triplet that sum to a given value <span class="tag"><span class="array">array</span></span> {#find-the-triplet-that-sum-to-a-given-value}

<https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0>

```cpp
class Solution {
public:
  bool find3Numbers(int A[], int n, int X) {
    sort(A, A + n);
    for (int i = 0; i < n - 2; i++) {
      int l = i + 1, r = n - 1;

      while (l < r) {
        int sum = A[i] + A[l] + A[r];
        if (sum == X)
          return true;
        else if (sum < X) {
          l++;
        } else {
          r--;
        }
      }
    }
    return false;
  }
};
```


### When `X = 0` {#when-x-0}

<https://leetcode.com/problems/3sum/>
2 pointer, avoid duplicates since `vector<vector<int>>` returned

```cpp
class Solution {
public:
  vector<vector<int>> threeSum(vector<int> &nums) {
    vector<vector<int>> ans;

    sort(nums.begin(), nums.end());

    int n = nums.size();
    for (int i = 0; i < n - 2; i++) {
      if (i == 0 || nums[i] != nums[i - 1]) {
        int l = i + 1, r = n - 1;

        while (l < r) {
          if (nums[l] + nums[r] + nums[i] == 0) {
            vector<int> triplet = {nums[l], nums[r], nums[i]};
            ans.push_back(triplet);

            while (l < r && nums[l] == nums[l + 1]) {
              l++;
            }
            while (l < r && nums[r] == nums[r - 1]) {
              r--;
            }

            l++;
            r--;
          } else if (nums[l] + nums[r] + nums[i] > 0) {
            r--;
          } else {
            l++;
          }
        }
      }
    }
    return ans;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Trapping rain water <span class="tag"><span class="array">array</span></span> {#trapping-rain-water}

<https://practice.geeksforgeeks.org/problems/trapping-rain-water/0>

Find lMax, rMax
ans += min(lMax, rMax) - currHeight

```cpp
class Solution {
public:
  int trap(vector<int> &height) {
    if (height.empty())
      return 0;

    int n = height.size();
    vector<pair<int, int>> maxHeights(n);

    maxHeights[0].first = height[0];
    maxHeights[n - 1].second = height[n - 1];

    for (int i = 1; i < n; i++) {
      maxHeights[i].first = max(height[i], maxHeights[i - 1].first);
    }
    for (int i = n - 2; i >= 0; i--) {
      maxHeights[i].second = max(height[i], maxHeights[i + 1].second);
    }

    int rain = 0;

    for (int i = 0; i < n; i++) {
      rain += min(maxHeights[i].first, maxHeights[i].second) - height[i];
    }

    return rain;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Chocolate distribution <span class="tag"><span class="array">array</span><span class="greedy">greedy</span></span> {#chocolate-distribution}

<https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0>

Make window in sorted array, check for minimum

```cpp
class Solution {
public:
  long long findMinDiff(vector<long long> a, long long n, long long m) {
    if (m == 0 || n == 0)
      return 0;

    if (n < m)
      return -1;

    sort(a.begin(), a.end());
    long long ans = LLONG_MAX;

    for (long long i = 0; i + m - 1 < n; i++) {
      ans = min(ans, a[i + m - 1] - a[i]);
    }

    return ans;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Smallest subarray with sum greater than a given value <span class="tag"><span class="array">array</span></span> {#smallest-subarray-with-sum-greater-than-a-given-value}

<https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0>


## <span class="org-todo todo TODO">TODO</span> Three way partitioning of an array around a given value <span class="tag"><span class="array">array</span></span> {#three-way-partitioning-of-an-array-around-a-given-value}

<https://practice.geeksforgeeks.org/problems/three-way-partitioning/1>


## <span class="org-todo todo TODO">TODO</span> Minimum swaps required to bring elements &lt;= K together <span class="tag"><span class="array">array</span></span> {#minimum-swaps-required-to-bring-elements-k-together}

<https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0>


## <span class="org-todo todo TODO">TODO</span> Minimum number of merge operations required to make an array palindrome <span class="tag"><span class="array">array</span></span> {#minimum-number-of-operations-required-to-make-an-array-palindrome}

<https://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/>

```cpp
int findMinOps(int arr[], int n) {
  int ans = 0;

  for (int i = 0, j = n - 1; i <= j;) {
    if (arr[i] == arr[j]) {
      i++;
      j--;
    } else if (arr[i] > arr[j]) {
      j--;
      arr[j] += arr[j + 1];
      ans++;
    } else {
      i++;
      arr[i] += arr[i - 1];
      ans++;
    }
  }

  return ans;
}
```


## <span class="org-todo todo TODO">TODO</span> Median of 2 sorted arrays of equal size <span class="tag"><span class="array">array</span></span> {#median-of-2-sorted-arrays-of-equal-size}

<https://practice.geeksforgeeks.org/problems/find-the-median0527/1>


## <span class="org-todo todo TODO">TODO</span> Median of 2 sorted arrays of different size <span class="tag"><span class="array">array</span></span> {#median-of-2-sorted-arrays-of-different-size}

<https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/>


## <span class="org-todo todo TODO">TODO</span> Spiral traversal on a matrix <span class="tag"><span class="matrix">matrix</span></span> {#spiral-traversal-on-a-matrix}

<https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0>


## <span class="org-todo todo TODO">TODO</span> Search an element in a matrix <span class="tag"><span class="matrix">matrix</span></span> {#search-an-element-in-a-matrix}

<https://leetcode.com/problems/search-a-2d-matrix/>

Altered binary search

```cpp
class Solution {
public:
  bool searchMatrix(vector<vector<int>> &matrix, int target) {
    int n = matrix.size();
    int m = matrix[0].size();
    int l = 0, r = n * m - 1;

    while (l <= r) {
      int mid = (l + r) / 2;
      int N = mid / m;
      int M = mid % m;

      if (target == matrix[N][M])
        return true;
      else if (target < matrix[N][M])
        r = mid - 1;
      else
        l = mid + 1;
    }

    return false;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find median in a row wise sorted matrix <span class="tag"><span class="matrix">matrix</span></span> {#find-median-in-a-row-wise-sorted-matrix}

<https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1>


## <span class="org-todo todo TODO">TODO</span> Find row with maximum number of 1s <span class="tag"><span class="matrix">matrix</span></span> {#find-row-with-maximum-number-of-1s}

<https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1>


## <span class="org-todo todo TODO">TODO</span> Print elements in sorted order using row-column wise sorted matrix <span class="tag"><span class="matrix">matrix</span></span> {#print-elements-in-sorted-order-using-row-column-wise-sorted-matrix}

<https://practice.geeksforgeeks.org/problems/sorted-matrix/0>


## <span class="org-todo todo TODO">TODO</span> Maximum size rectangle <span class="tag"><span class="matrix">matrix</span></span> {#maximum-size-rectangle}

<https://practice.geeksforgeeks.org/problems/max-rectangle/1>


## <span class="org-todo todo TODO">TODO</span> Find a specific pair in matrix <span class="tag"><span class="matrix">matrix</span></span> {#find-a-specific-pair-in-matrix}

<https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/>


## <span class="org-todo todo TODO">TODO</span> Rotate matrix by 90 degrees <span class="tag"><span class="matrix">matrix</span></span> {#rotate-matrix-by-90-degrees}

<https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/>


## <span class="org-todo todo TODO">TODO</span> Kth smallest element in a row-column wise sorted matrix <span class="tag"><span class="matrix">matrix</span></span> {#kth-smallest-element-in-a-row-column-wise-sorted-matrix}

<https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1>


## <span class="org-todo todo TODO">TODO</span> Common elements in all rows of a given matrix <span class="tag"><span class="matrix">matrix</span></span> {#common-elements-in-all-rows-of-a-given-matrix}

<https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/>


## <span class="org-todo todo TODO">TODO</span> Check whether a string is palindrome <span class="tag"><span class="string">string</span></span> {#check-whether-a-string-is-palindrome}

<https://practice.geeksforgeeks.org/problems/palindrome-string0817/1>

```cpp
class Solution {
public:
  int isPlaindrome(string S) {
    int n = S.size();

    for (int i = 0; i < n / 2; i++) {
      if (S[i] != S[n - i - 1])
        return false;
    }

    return true;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find duplicate characters in a string <span class="tag"><span class="string">string</span></span> {#find-duplicate-characters-in-a-string}

<https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/>


## <span class="org-todo todo TODO">TODO</span> Why are strings immutable in Java? <span class="tag"><span class="string">string</span></span> {#why-are-strings-immutable-in-java}

Java uses string literals mostly for memory security. Better alter copies of strings than alter main references in memory.


## <span class="org-todo todo TODO">TODO</span> Check whether one string is a rotation of another <span class="tag"><span class="string">string</span></span> {#check-whether-one-string-is-a-rotation-of-another}

<https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/>

```cpp
bool areRotations(string str1, string str2) {
  if (str1.length() != str2.length())
    return false;

  string temp = str1 + str1;
  return (temp.find(str2) != string::npos);
}
```


## <span class="org-todo todo TODO">TODO</span> Check whether a string is a valid shuffle of two strings <span class="tag"><span class="string">string</span></span> {#check-whether-a-string-is-a-valid-shuffle-of-two-strings}

<https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings>

```cpp
bool shuffleCheck(string first, string second, string result) {
  if (first.size() + second.size() != result.size()) {
    return false;
  }

  int i = 0, j = 0, k = 0;

  while (k != result.size()) {
    if (i < first.size() && first[i] == result[i])
      i++;
    else if (j < second.size() && second[j] == result[k])
      j++;
    else {
      return false;
    }

    k++;
  }

  if (i < first.size() || j < second.size()) {
    return false;
  }

  return true;
}
```


## <span class="org-todo todo TODO">TODO</span> Count and say <span class="tag"><span class="string">string</span></span> {#count-and-say}

<https://leetcode.com/problems/count-and-say/>

```cpp
class Solution {
public:
  string countAndSay(int n) {
    if (n == 1)
      return "1";

    string cur = "";
    string prev = countAndSay(n - 1);
    int count = 0;

    for (int i = 0; i < prev.size(); i++) {
      count++;

      if (i == prev.size() - 1 || prev[i] != prev[i + 1]) {
        cur += to_string(count);
        cur += prev[i];
        count = 0;
      }
    }

    return cur;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find the longest palindrome in a string <span class="tag"><span class="string">string</span></span> {#find-the-longest-palindrome-in-a-string}

<https://leetcode.com/problems/longest-palindromic-substring/>

Expand from center, check for even and odd palindromes

```cpp
class Solution {
public:
  string longestPalindrome(string s) {
    if (s.size() < 1)
      return "";
    int start = 0;
    int l = s.size();
    int maxLength = 1;

    for (int i = 0; i < l; i++) {
      // Odd
      int low = i - 1, high = i;
      while (low >= 0 && high < l && s[low] == s[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        low--;
        high++;
      }
      // Even
      low = i - 1, high = i + 1;
      while (low >= 0 && high < l && s[low] == s[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        low--;
        high++;
      }
    }
    return s.substr(start, maxLength);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Print all subsequences of a string <span class="tag"><span class="string">string</span></span> {#print-all-subsequences-of-a-string}

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


## <span class="org-todo todo TODO">TODO</span> Split the binary string into two substring with equal 0s and 1s <span class="tag"><span class="string">string</span></span> {#split-the-binary-string-into-two-substring-with-equal-0s-and-1s}

<https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/>

```cpp
int maxSubStr(string str) {
  int n = str.length();
  int count0 = 0, count1 = 0;

  int cnt = 0;
  for (int i = 0; i < n; i++) {
    if (str[i] == '0') {
      count0++;
    } else if (str[i] == '1') {
      count1++;
    }

    if (count0 == count1) {
      cnt++;
    }
  }

  if (cnt == 0) {
    return -1;
  }

  return cnt;
}
```


## <span class="org-todo todo TODO">TODO</span> Word wrap <span class="tag"><span class="string">string</span><span class="dp">dp</span></span> {#word-wrap}

<https://practice.geeksforgeeks.org/problems/word-wrap/0>


## <span class="org-todo todo TODO">TODO</span> Edit distance <span class="tag"><span class="string">string</span><span class="dp">dp</span></span> {#edit-distance}

<https://leetcode.com/problems/edit-distance/>

```text
+---------+-----+
| replace | del |
+---------+-----+
| insert  | X   |
+---------+-----+
```

```cpp
class Solution {
 int  dp[505][505];
 public:
  int minDistance(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();

    for (int i = 0; i <= m; i++) {
      for (int j = 0; j <= n; j++) {
        if (i == 0)
          dp[i][j] = j;
        else if (j == 0)
          dp[i][j] = i;
        else if (word1[i - 1] == word2[j - 1])
          dp[i][j] = dp[i - 1][j - 1];
        else {
          int insert = dp[i][j - 1];
          int del = dp[i - 1][j];
          int replace = dp[i - 1][j - 1];
          dp[i][j] = 1 + min({insert, del, replace});
        }
      }
    }
    return dp[m][n];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find next greater number with same set of digits <span class="tag"><span class="string">string</span></span> {#find-next-greater-number-with-same-set-of-digits}

<https://practice.geeksforgeeks.org/problems/next-permutation/0>


## <span class="org-todo done DONE">DONE</span> Balanced parenthesis <span class="tag"><span class="string">string</span><span class="st_q">st-q</span></span> {#balanced-parenthesis}

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


## <span class="org-todo todo TODO">TODO</span> Word break <span class="tag"><span class="string">string</span><span class="trie">trie</span><span class="backtracking">backtracking</span><span class="dp">dp</span></span> {#word-break}

<https://practice.geeksforgeeks.org/problems/word-break/0>


## <span class="org-todo todo TODO">TODO</span> Rabin Karp algorithm <span class="tag"><span class="string">string</span></span> {#rabin-karp-algorithm}

<https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/>


## <span class="org-todo todo TODO">TODO</span> KMP algorithm <span class="tag"><span class="string">string</span></span> {#kmp-algorithm}

<https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1>


## <span class="org-todo todo TODO">TODO</span> Bayer Moore algorithm <span class="tag"><span class="string">string</span></span> {#boyer-moore-algorithm-for-pattern-searching}

<https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/>


## <span class="org-todo todo TODO">TODO</span> Convert a sentence into its equivalent mobile numeric keypad sequence <span class="tag"><span class="string">string</span></span> {#convert-a-sentence-into-its-equivalent-mobile-numeric-keypad-sequence}

<https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/>


## <span class="org-todo todo TODO">TODO</span> Minimum number of bracket reversals needed to make an expression balanced <span class="tag"><span class="string">string</span></span> {#minimum-number-of-bracket-reversals-needed-to-make-an-expression-balanced}

<https://practice.geeksforgeeks.org/problems/count-the-reversals/0>

}{{}}{{{
Remove all valid pairs, remaining string is like }}}...{{{...
ans = ceil(lBraces) + ceil(rBraces) in remaining string

```cpp
int countRev(string s) {
  int n = s.size();
  if (n % 2 != 0) return -1;

  stack<char> st;

  for (int i = 0; i < n; i++)
  {
    if (s[i] == '}' && !st.empty())
    {
      if (st.top() == '{')
        st.pop();
      else
        st.push(s[i]);
    }
    else
      st.push(s[i]);
  }

  int lCount = 0;

  while (!st.empty() && st.top() == '{')
  {
    lCount++;
    st.pop();
  }
  int rCount = st.size();

  return (ceil((double)lCount / 2) + ceil((double)rCount / 2));
}
```


## <span class="org-todo todo TODO">TODO</span> Count all palindromic subsequence in a given string <span class="tag"><span class="string">string</span><span class="dp">dp</span></span> {#count-all-palindromic-subsequence-in-a-given-string}

<https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1>


## <span class="org-todo todo TODO">TODO</span> Count of number of given string in 2D character array <span class="tag"><span class="string">string</span></span> {#count-of-number-of-given-string-in-2d-character-array}

<https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/>

```cpp
class Solution {
  bool searchUtil(int r, int c, string &word, vector<pair<int, int>> &dir,
                  vector<vector<char>> &grid) {
    int R = grid.size();
    int C = grid[0].size();

    if (grid[r][c] != word[0]) {
      return false;
    }

    int len = word.length();

    for (int i = 0; i < 8; i++) {
      int k = 1, rd = r + dir[i].first, cd = c + dir[i].second;

      while (k < len) {
        if (rd >= R || cd >= C || rd < 0 || cd < 0) {
          break;
        }

        if (grid[rd][cd] != word[k]) {
          break;
        }

        rd += dir[i].first;
        cd += dir[i].second;
        k++;
      }

      if (k == len)
        return true;
    }
    return false;
  }

public:
  vector<vector<int>> searchWord(vector<vector<char>> grid, string word) {
    vector<vector<int>> res;
    vector<pair<int, int>> dir = {{-1, -1}, {-1, 0}, {-1, 1}, {0, -1},
                                  {0, 1},   {1, -1}, {1, 0},  {1, 1}};

    for (int i = 0; i < grid.size(); i++) {
      for (int j = 0; j < grid[0].size(); j++) {
        if (searchUtil(i, j, word, dir, grid))
          res.push_back({i, j});
      }
    }
    return res;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Search a word in a 2D grid of characters <span class="tag"><span class="string">string</span></span> {#search-a-word-in-a-2d-grid-of-characters}

<https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0>


## <span class="org-todo todo TODO">TODO</span> Converting roman numerals to decimal <span class="tag"><span class="string">string</span></span> {#converting-roman-numerals-to-decimal}

<https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0>


## <span class="org-todo todo TODO">TODO</span> Longest common prefix <span class="tag"><span class="string">string</span></span> {#longest-common-prefix}

<https://leetcode.com/problems/longest-common-prefix/>

Divide and conquer, compare left and right subarrays.

```cpp
class Solution {
  string lcp(vector<string> &strs, int l, int r) {
    if (l == r)
      return strs[l];
    else {
      int mid = l + (r - l) / 2;
      string leftLCP = lcp(strs, l, mid);
      string rightLCP = lcp(strs, mid + 1, r);

      return commonPrefix(leftLCP, rightLCP);
    }
  }

  string commonPrefix(string left, string right) {
    int l = min(left.length(), right.length());

    int ctr = 0;
    while (ctr < l && left[ctr] == right[ctr]) {
      ctr++;
    }

    return left.substr(0, ctr);
  }

public:
  string longestCommonPrefix(vector<string> &strs) {
    if (strs.size() < 0)
      return "";

    return lcp(strs, 0, strs.size() - 1);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Number of flips to make binary string alternate <span class="tag"><span class="string">string</span></span> {#number-of-flips-to-make-binary-string-alternate}

<https://practice.geeksforgeeks.org/problems/min-number-of-flips/0>

```cpp
int minFlips(string S) {
  int zeroFlipCount = 0, oneFlipCount = 0;
  char expected = '0';
  for (int i = 0; i < S.length(); i++) {
    if (S[i] != expected)
      zeroFlipCount++;

    expected = (expected == '0') ? '1' : '0';
  }
  expected = '1';
  for (int i = 0; i < S.length(); i++) {
    if (S[i] != expected)
      oneFlipCount++;

    expected = (expected == '1') ? '0' : '1';
  }

  return min(zeroFlipCount, oneFlipCount);
}
```


## <span class="org-todo todo TODO">TODO</span> Find the second most repeated word in string <span class="tag"><span class="string">string</span></span> {#find-the-second-most-repeated-word-in-string}

<https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence/0>

```cpp
class Solution {
public:
  string secFrequent(string arr[], int n) {
    map<string, int> mp;

    for (int i = 0; i < n; i++) {
      mp[arr[i]]++;
    }

    int maxFreq = -1, notMaxFreq = -1;
    string ans = "";

    for (auto it : mp) {
      if (it.second > maxFreq) {
        notMaxFreq = maxFreq;
        maxFreq = it.second;
      } else if (it.second > notMaxFreq && it.second != maxFreq) {
        notMaxFreq = it.second;
      }
    }

    for (auto it : mp) {
      if (it.second == notMaxFreq) {
        return it.first;
      }
    }
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Minimum number of swaps for bracket balancing <span class="tag"><span class="string">string</span></span> {#minimum-number-of-swaps-for-bracket-balancing}

<https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing/0>


## <span class="org-todo todo TODO">TODO</span> Program to generate all possible valid IP addresses from given string <span class="tag"><span class="string">string</span></span> {#program-to-generate-all-possible-valid-ip-addresses-from-given-string}

<https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/>


## <span class="org-todo todo TODO">TODO</span> Find the smallest window that contains all characters of string itself <span class="tag"><span class="string">string</span></span> {#find-the-smallest-window-that-contains-all-characters-of-string-itself}

<https://practice.geeksforgeeks.org/problems/smallest-distant-window/0>


## <span class="org-todo todo TODO">TODO</span> Rearrange characters in a string such that no two adjacent are same <span class="tag"><span class="string">string</span><span class="heap">heap</span><span class="greedy">greedy</span></span> {#rearrange-characters-in-a-string-such-that-no-two-adjacent-are-same}

<https://practice.geeksforgeeks.org/problems/rearrange-characters/0>


## <span class="org-todo todo TODO">TODO</span> Minimum characters to be added at front to make string palindrome <span class="tag"><span class="string">string</span></span> {#minimum-characters-to-be-added-at-front-to-make-string-palindrome}

<https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/>


## <span class="org-todo todo TODO">TODO</span> Given a sequence of words, print all anagrams together <span class="tag"><span class="string">string</span><span class="trie">trie</span><span class="greedy">greedy</span></span> {#given-a-sequence-of-words-print-all-anagrams-together}

<https://practice.geeksforgeeks.org/problems/k-anagrams-1/0>


## <span class="org-todo todo TODO">TODO</span> Find the smallest window in a string containing all characters of another string <span class="tag"><span class="string">string</span></span> {#find-the-smallest-window-in-a-string-containing-all-characters-of-another-string}

<https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/0>


## <span class="org-todo todo TODO">TODO</span> Recursively remove all adjacent duplicates <span class="tag"><span class="string">string</span></span> {#recursively-remove-all-adjacent-duplicates}

<https://practice.geeksforgeeks.org/problems/consecutive-elements/0>

```cpp
class Solution {
public:
  string removeConsecutiveCharacter(string S) {
    int n = S.size();
    string ans = "";

    for (int i = 0; i < n - 1; i++) {
      ans += S[i];
      while (S[i] == S[i + 1]) {
        i++;
      }
    }

    if (S[n - 1] != S[n - 2])
      ans += S[n - 1];

    return ans;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> String matching where one string contains wildcard characters <span class="tag"><span class="string">string</span></span> {#string-matching-where-one-string-contains-wildcard-characters}

<https://practice.geeksforgeeks.org/problems/wildcard-string-matching/0>


## <span class="org-todo todo TODO">TODO</span> Function to find number of customers who could not get a computer <span class="tag"><span class="string">string</span></span> {#function-to-find-number-of-customers-who-could-not-get-a-computer}

<https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/>


## <span class="org-todo todo TODO">TODO</span> Transform one string to another using minimum number of given operation <span class="tag"><span class="string">string</span></span> {#transform-one-string-to-another-using-minimum-number-of-given-operation}

<https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/>

1.  Check relative character frequencies &amp; length of strings
2.  Start from end, increase `res` till character found in B

Doing this because insertion is only allowed in front of A

```cpp
#include <bits/stdc++.h>
using namespace std;

int minOps(string A, string B) {
  int n = A.length(), m = B.length();

  if (n != m) return -1;

  map<char, pair<int, int>> mp;

  for (int i = 0; i < n; i++) {
    mp[A[i]].first++;
    mp[B[i]].second++;
  }

  for (auto it : mp) {
    if (it.second.first != it.second.second) return -1;
  }

  int res = 0;
  int i = m - 1, j = n - 1;
  while (i >= 0) {
    while (i >= 0 && A[i] != B[j]) {
      i--;
      res++;
    }

    if (i >= 0) {
      i--;
      j--;
    }
  }

  return res;
}

int main() {
  string a, b;
  cin >> a >> b;
  cout << minOps(a, b);
  return 0;
}
```


## <span class="org-todo todo TODO">TODO</span> Check if two given strings are isomorphic to each other <span class="tag"><span class="string">string</span></span> {#check-if-two-given-strings-are-isomorphic-to-each-other}

<https://practice.geeksforgeeks.org/problems/isomorphic-strings/0>


## <span class="org-todo todo TODO">TODO</span> Recursively print all sentences that can be formed from list of word lists <span class="tag"><span class="string">string</span></span> {#recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists}

<https://www.geeksforgeeks.org/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/>


## <span class="org-todo done DONE">DONE</span> Find first and last positions of an element in a sorted array <span class="tag"><span class="search_sort">search-sort</span></span> {#find-first-and-last-positions-of-an-element-in-a-sorted-array}

<https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0>

```cpp
int firstOccurance(int arr[], int n, int x)
{
    int low = 0, high = n - 1, mid = -1;

    int index = -1;

    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (arr[mid] == x)
        {
            index = mid;
            high = mid - 1;
        }
        else if (arr[mid] > x)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }

    return index;
}

int lastOccurance(int arr[], int n, int x)
{
    int low = 0, high = n - 1, mid = -1;

    int index = -1;

    while (low <= high) {
      mid = low + (high - low) / 2;
      if (arr[mid] == x) {
        index = mid;
        low = mid + 1;
      } else if (arr[mid] > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return index;
}

vector<int> find(int arr[], int n, int x) {
  vector<int> v(2, 0);
  v[0] = firstOccurance(arr, n, x);
  v[1] = lastOccurance(arr, n, x);

  return v;
}
```


## <span class="org-todo todo TODO">TODO</span> Find a fixed point (value equal to index) in a given array <span class="tag"><span class="search_sort">search-sort</span></span> {#find-a-fixed-point--value-equal-to-index--in-a-given-array}

<https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1>

GfG testcases are incorrect, we can only use binary search on a sorted array

```cpp
class Solution {
  vector<int> v;

public:
  vector<int> valueEqualToIndex(int arr[], int n) {
    int low = 0, high = n - 1;
    while (low <= high) {
      int mid = (low + high) / 2; // low + (high - low)/2;
      if (mid == arr[mid + 1])
        v.push_back(mid);
      if (mid > arr[mid + 1])
        low = mid + 1;
      else
        high = mid - 1;
    }
    return v;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Search in a rotated sorted array <span class="tag"><span class="search_sort">search-sort</span></span> {#search-in-a-rotated-sorted-array}

<https://leetcode.com/problems/search-in-rotated-sorted-array/>

```cpp
class Solution {
public:
  int findMin(int arr[], int n) {
    int low = 0, high = n - 1;

    while (low <= high) {
      int mid = (low + high) / 2;
      int next = (mid + 1) % n;
      int prev = (mid + n - 1) % n;

      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return arr[mid];
      } else if (arr[mid] < arr[n - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Square root of an integer <span class="tag"><span class="search_sort">search-sort</span></span> {#square-root-of-an-integer}

<https://practice.geeksforgeeks.org/problems/count-squares3649/1>


## <span class="org-todo todo TODO">TODO</span> Maximum and minimum of an array using minimum number of comparisons <span class="tag"><span class="search_sort">search-sort</span></span> {#maximum-and-minimum-of-an-array-using-minimum-number-of-comparisons}

<https://practice.geeksforgeeks.org/problems/middle-of-three2926/1>


## <span class="org-todo todo TODO">TODO</span> Optimum location of point to minimize total distance <span class="tag"><span class="search_sort">search-sort</span></span> {#optimum-location-of-point-to-minimize-total-distance}

<https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/>


## <span class="org-todo todo TODO">TODO</span> Find missing and repeating <span class="tag"><span class="search_sort">search-sort</span></span> {#find-missing-and-repeating}

<https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1>

```cpp
class Solution {
public:
  int *findTwoElement(int *arr, int n) {
    int *ans = new int(2);

    for (int i = 0; i < n; i++) {
      int index = abs(arr[i]) - 1;
      if (arr[index] < 0) {
        ans[0] = index + 1;
      }
      arr[index] = -abs(arr[index]);
    }

    for (int i = 0; i < n; i++) {
      if (arr[i] > 0) {
        ans[1] = i + 1;
        break;
      }
    }
    return ans;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Find majority element <span class="tag"><span class="search_sort">search-sort</span></span> {#find-majority-element}

<https://practice.geeksforgeeks.org/problems/majority-element/0>

Moore's voting algorithm

```cpp
class Solution {
public:
  int majorityElement(vector<int> &nums) {
    int major = nums[0], count = 1;

    for (int i = 1; i < nums.size(); i++) {
      if (major == nums[i]) {
        count++;
      } else if (count == 0) {
        count++;
        major = nums[i];
      } else {
        count--;
      }
    }

    return major;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Searching in an array where adjacent differ by at most K <span class="tag"><span class="search_sort">search-sort</span></span> {#searching-in-an-array-where-adjacent-differ-by-at-most-k}

<https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/>

```cpp
int search(int arr[], int n, int x) {
  int i = 0;
  while (i < n) {
    if (arr[i] == x)
      return i;

    i += max(1, abs(arr[i] - x) / k);
  }

  cout << "Number not present";
  return -1;
}
```


## <span class="org-todo todo TODO">TODO</span> Find a pair with a given difference <span class="tag"><span class="search_sort">search-sort</span></span> {#find-a-pair-with-a-given-difference}

<https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0>


## <span class="org-todo todo TODO">TODO</span> Find four elements that sum to a given value <span class="tag"><span class="search_sort">search-sort</span></span> {#find-four-elements-that-sum-to-a-given-value}

<https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0>


## <span class="org-todo todo TODO">TODO</span> Maximum sum such that no 2 elements are adjacent <span class="tag"><span class="search_sort">search-sort</span></span> {#maximum-sum-such-that-no-2-elements-are-adjacent}

<https://practice.geeksforgeeks.org/problems/stickler-theif/0>


## <span class="org-todo todo TODO">TODO</span> Count triplet with sum smaller than a given value <span class="tag"><span class="search_sort">search-sort</span></span> {#count-triplet-with-sum-smaller-than-a-given-value}

<https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1>


## <span class="org-todo todo TODO">TODO</span> Merge 2 sorted arrays <span class="tag"><span class="array">array</span><span class="search_sort">search-sort</span></span> {#merge-2-sorted-arrays}

<https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1>

```cpp
class Solution {
public:
  void merge(int arr1[], int arr2[], int n, int m) {
    int i = 0, j = 0, k = n - 1;

    while (i <= k and j < m) {
      if (arr1[i] < arr2[j])
        i++;
      else {
        swap(arr2[j++], arr1[k--]);
      }
    }

    sort(arr1, arr1 + n);
    sort(arr2, arr2 + m);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Print all subarrays with 0 sum <span class="tag"><span class="search_sort">search-sort</span></span> {#print-all-subarrays-with-0-sum}

<https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0>


## <span class="org-todo todo TODO">TODO</span> Product array puzzle <span class="tag"><span class="search_sort">search-sort</span></span> {#product-array-puzzle}

<https://practice.geeksforgeeks.org/problems/product-array-puzzle/0>


## <span class="org-todo todo TODO">TODO</span> Sort array according to count of set bits <span class="tag"><span class="search_sort">search-sort</span></span> {#sort-array-according-to-count-of-set-bits}

<https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0>

```cpp
class Solution {
public:
  int findSetBits(int n) {
    int bCount = 0;

    while (n != 0) {
      n &= (n - 1);
      bCount++;
    }

    return bCount;
  }

  void sortBySetBitCount(int arr[], int n) {
    stable_sort(arr, arr + n, [&](int a, int b) -> bool {
      return findSetBits(a) > findSetBits(b);
    });
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Minimum number of swaps required to sort the array <span class="tag"><span class="search_sort">search-sort</span></span> {#minimum-number-of-swaps-required-to-sort-the-array}

<https://practice.geeksforgeeks.org/problems/minimum-swaps/1>


## <span class="org-todo todo TODO">TODO</span> Bishu and soldiers <span class="tag"><span class="search_sort">search-sort</span></span> {#bishu-and-soldiers}

<https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/>


## <span class="org-todo todo TODO">TODO</span> Rasta and Kheshtak <span class="tag"><span class="search_sort">search-sort</span></span> {#rasta-and-kheshtak}

<https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/>


## <span class="org-todo todo TODO">TODO</span> Kth smallest number again <span class="tag"><span class="search_sort">search-sort</span></span> {#kth-smallest-number-again}

<https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/>

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve() {
  int n, q;
  cin >> n >> q;
  vector<pair<int, int>> v(n);
  for (auto &it : v)
    cin >> it.first >> it.second;
  sort(v.begin(), v.end());
  int idx = 0;
  for (int i = 1; i < n; i++) {
    if (v[idx].second >= v[i].first) {
      v[idx].second = max(v[idx].second, v[i].second);
    } else {
      idx++;
      v[idx] = v[i];
    }
  }

  while (q--) {
    int k;
    cin >> k;
    int ans = -1;
    for (int i = 0; i <= idx; i++) {
      if (v[i].second - v[i].first + 1 >= k) {
        ans = v[i].first + k - 1;
        break;
      } else {
        k -= v[i].second - v[i].first + 1;
      }
    }

    cout << ans << "\n";
  }
}

signed main() {
  int t;
  cin >> t;
  while (t--) {
    solve();
  }
  return 0;
}
```


## <span class="org-todo todo TODO">TODO</span> Find pivot element in a sorted array <span class="tag"><span class="search_sort">search-sort</span></span> {#find-pivot-element-in-a-sorted-array}

<http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/>


## <span class="org-todo todo TODO">TODO</span> Kth element of two sorted arrays <span class="tag"><span class="search_sort">search-sort</span></span> {#kth-element-of-two-sorted-arrays}

<https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0>


## <span class="org-todo todo TODO">TODO</span> Aggressive cows <span class="tag"><span class="search_sort">search-sort</span></span> {#aggressive-cows}

<https://www.spoj.com/problems/AGGRCOW/>


## <span class="org-todo todo TODO">TODO</span> Book allocation aka Painter's Partition <span class="tag"><span class="search_sort">search-sort</span></span> {#book-allocation-aka-painter-s-partition}

<https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0>

```cpp
class Solution {
public:
  int findPages(int arr[], int n, int m) {
    sort(arr, arr + n);
    int start = *max_element(arr, arr + n), end = accumulate(arr, arr + n, 0);
    int mid = -1;
    int res = INT_MAX;
    while (start <= end) {
      mid = start + (end - start) / 2;
      if (isValid(arr, n, m, mid)) {
        res = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return res;
  }

  bool isValid(int arr[], int n, int k, int mx) {
    int sum = 0, groups = 1;

    for (int i = 0; i < n; i++) {
      if (sum + arr[i] <= mx) {
        sum += arr[i];
      } else {
        sum = 0;
        groups++;
      }
    }
    return (groups == k);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Ekospoj <span class="tag"><span class="search_sort">search-sort</span></span> {#ekospoj}

<https://www.spoj.com/problems/EKO/>


## <span class="org-todo todo TODO">TODO</span> Job scheduling algorithm <span class="tag"><span class="search_sort">search-sort</span></span> {#job-scheduling-algorithm}

<https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/>


## <span class="org-todo done DONE">DONE</span> Missing number in AP <span class="tag"><span class="search_sort">search-sort</span></span> {#missing-number-in-ap}

<https://practice.geeksforgeeks.org/problems/arithmetic-number/0>

```cpp
class Solution {
public:
  int inSequence(int A, int B, int C) {
    // B = A + (n - 1)C
    // (B - A) / C + 1 = n;
    return (B == A + ((B - A) / C) * C);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Smallest number with atleast N trailing zeroes in factorial <span class="tag"><span class="search_sort">search-sort</span></span> {#smallest-number-with-atleast-n-trailing-zeroes-in-factorial}

<https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1>


## <span class="org-todo todo TODO">TODO</span> Roti Prata <span class="tag"><span class="search_sort">search-sort</span></span> {#roti-prata}

<https://www.spoj.com/problems/PRATA/>


## <span class="org-todo todo TODO">TODO</span> Doublehelix <span class="tag"><span class="search_sort">search-sort</span></span> {#doublehelix}

<https://www.spoj.com/problems/ANARC05B/>


## <span class="org-todo todo TODO">TODO</span> Subset sums <span class="tag"><span class="search_sort">search-sort</span></span> {#subset-sums}

<https://www.spoj.com/problems/SUBSUMS/>


## <span class="org-todo todo TODO">TODO</span> Implement merge-sort in-place <span class="tag"><span class="search_sort">search-sort</span></span> {#implement-merge-sort-in-place}

<https://www.geeksforgeeks.org/in-place-merge-sort/>


## <span class="org-todo todo TODO">TODO</span> Partitioning and sorting arrays with many repeated entries <span class="tag"><span class="search_sort">search-sort</span></span> {#partitioning-and-sorting-arrays-with-many-repeated-entries}

<https://www.baeldung.com/java-sorting-arrays-with-repeated-entries>


## <span class="org-todo done DONE">DONE</span> Reverse a linked list <span class="tag"><span class="ll">ll</span></span> {#reverse-a-linked-list}

<https://www.geeksforgeeks.org/reverse-a-linked-list/>

```cpp
class Solution {
public:
  struct Node *reverseList(struct Node *head) {
    if (head == nullptr)
      return head;

    Node *prev = nullptr, *next, *curr = head;

    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Reverse a linked list in group of given size <span class="tag"><span class="ll">ll</span></span> {#reverse-a-linked-list-in-group-of-given-size}

<https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1>

```cpp
class Solution {
public:
  struct node *reverse(struct node *head, int k) {
    stack<node *> st;
    struct node *curr = head;
    struct node *prev = nullptr;

    while (curr != nullptr) {
      int ctr = 0;
      while (curr != nullptr && ctr < k) {
        st.push(curr);
        curr = curr->next;
        ctr++;
      }

      while (!st.empty()) {
        if (prev == nullptr) {
          prev = st.top();
          head = prev;
          st.pop();
        } else {
          prev->next = st.top();
          prev = prev->next;
          st.pop();
        }
      }
    }

    prev->next = nullptr;
    return head;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Detect loop in a linked list <span class="tag"><span class="ll">ll</span></span> {#detect-loop-in-a-linked-list}

<https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1>

Floyd's tortoise and hare algorithm

```cpp
class Solution {
public:
  bool detectLoop(Node *head) {
    Node *hare = head, *tortoise = head;

    if (head == nullptr || head->next == nullptr)
      return false;

    while (hare != nullptr && tortoise != nullptr) {
      tortoise = tortoise->next;
      hare = hare->next;
      hare = hare ? hare->next : hare;
      if (hare == tortoise) {
        return true;
      }
    }

    return false;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Delete loop in a linked list <span class="tag"><span class="ll">ll</span></span> {#delete-loop-in-a-linked-list}

<https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1>

```cpp
class Solution {
public:
  void removeLoop(Node *head) {
    Node *hare = head, *tor = head;

    while (hare != nullptr && hare->next != nullptr && tor != nullptr) {
      tor = tor->next;
      hare = hare->next->next;

      if (hare == tor) {
        Node *ptr1 = tor, *ptr2 = tor;
        unsigned int k = 1;
        while (ptr1->next != ptr2) {
          ptr1 = ptr1->next;
          k++;
        }

        ptr1 = head;
        ptr2 = head;

        while (k--)
          ptr2 = ptr2->next;

        while (ptr2 != ptr1) {
          ptr1 = ptr1->next;
          ptr2 = ptr2->next;
        }

        while (ptr2->next != ptr1)
          ptr2 = ptr2->next;

        ptr2->next = nullptr;
      }
    }
  }
};
```


## <span class="org-todo done DONE">DONE</span> Find the starting point of the loop <span class="tag"><span class="ll">ll</span></span> {#find-the-starting-point-of-the-loop}

<https://leetcode.com/problems/linked-list-cycle-ii/>

```cpp
class Solution {
public:
  ListNode *detectCycle(ListNode *head) {
    if (head == NULL || head->next == NULL)
      return NULL;

    ListNode *slow = head;
    ListNode *fast = head;
    bool isCycle = false;

    while (slow != NULL && fast != NULL) {
      slow = slow->next;
      if (fast->next == NULL)
        return NULL;
      fast = fast->next->next;
      if (slow == fast) {
        isCycle = true;
        break;
      }
    }

    if (!isCycle)
      return NULL;
    slow = head;
    while (slow != fast) {
      slow = slow->next;
      fast = fast->next;
    }

    return slow;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Remove duplicates in a sorted linked list <span class="tag"><span class="ll">ll</span></span> {#remove-duplicates-in-a-sorted-linked-list}

<https://leetcode.com/problems/remove-duplicates-from-sorted-list/>

Check for last element having duplicate

```cpp
class Solution {
public:
  ListNode *deleteDuplicates(ListNode *head) {
    ListNode *tmp = head, *prev = head;

    while (tmp != nullptr) {
      if (tmp->val != prev->val) {
        prev->next = tmp;
        prev = tmp;
      }
      tmp = tmp->next;
    }

    if (prev != tmp)
      prev->next = nullptr;

    return head;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Remove duplicates in a unsorted linked list <span class="tag"><span class="ll">ll</span></span> {#remove-duplicates-in-a-unsorted-linked-list}

<https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1>

```cpp
class Solution {
public:
  Node *removeDuplicates(Node *head) {
    set<int> seen;

    struct Node *curr = head;
    struct Node *prev = nullptr;
    while (curr != nullptr) {
      if (seen.find(curr->data) != seen.end()) {
        prev->next = curr->next;
        delete (curr);
      } else {
        seen.insert(curr->data);
        prev = curr;
      }
      curr = prev->next;
    }
    return head;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Move the last element to front in a linked list <span class="tag"><span class="ll">ll</span></span> {#move-the-last-element-to-front-in-a-linked-list}

<https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/>

```cpp
void moveToFront(Node **head) {
  if (*head == nullptr || (*head)->next == nullptr)
    return;

  Node *prev = nullptr;
  Node *tmp = *head;

  while (tmp->next != nullptr) {
    prev = tmp;
    tmp = tmp->next;
  }

  prev->next = nullptr;
  tmp->next = *head;
  *head = tmp;
}
```


## <span class="org-todo done DONE">DONE</span> Add 1 to a number represented as a linked list <span class="tag"><span class="ll">ll</span></span> {#add-1-to-a-number-represented-as-a-linked-list}

<https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1>

```cpp
class Solution {
  Node* reverseLL(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next;

    while (current != nullptr) {
      next = current->next;
      current->next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  Node *addOneUtil(Node* head) {
    Node* curr = head;
    Node* tmp = nullptr;

    int carry = 1, sum = 0;

    while (curr != nullptr) {
      sum = carry + curr->data;
      carry = (sum >= 10) ? 1 : 0;

      sum = sum % 10;
      curr->data = sum;

      tmp = curr;
      curr = curr->next;
    }

    if (carry > 0)
      tmp->next = new Node(carry);

    return head;
  }

public:
  Node *addOne(Node *head) {
    head = reverseLL(head);

    head = addOneUtil(head);

    return reverseLL(head);
  }
};
```


## <span class="org-todo done DONE">DONE</span> Add two numbers represented by linked lists <span class="tag"><span class="ll">ll</span></span> {#add-two-numbers-represented-by-linked-lists}

<https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1>

```cpp
class Solution {
  Node *reverse(Node *head) {
    Node *prev = nullptr, *curr = head, *next = nullptr;

    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }

public:
  Node *addTwoLists(struct Node *first, struct Node *second) {
    first = reverse(first);
    second = reverse(second);

    int c = 0, sum = 0;
    Node *start = nullptr, *end = nullptr;

    while (first != nullptr || second != nullptr) {
      int a = (first != nullptr) ? first->data : 0;
      int b = (second != nullptr) ? second->data : 0;

      sum = c + (a + b);
      c = (sum >= 10) ? 1 : 0;
      sum = sum % 10;

      if (start == nullptr) {
        start = new Node(sum);
        end = start;
      } else {
        end->next = new Node(sum);
        end = end->next;
      }
      if (first != nullptr)
        first = first->next;
      if (second != nullptr)
        second = second->next;
    }

    if (c > 0)
      end->next = new Node(c);
    start = reverse(start);
    return start;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Intersection of two sorted linked list <span class="tag"><span class="ll">ll</span></span> {#intersection-of-two-sorted-linked-list}

<https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1>

```cpp
Node *findIntersection(Node *head1, Node *head2) {
  Node *a = head1;
  Node *b = head2;
  Node *head = NULL;
  Node *ptr;
  while (a && b) {
    if (a->data == b->data) {
      if (head == NULL) {
        Node *tmp = new Node(a->data);
        head = tmp;
        ptr = head;
      } else {
        Node *tmp = new Node(a->data);
        ptr->next = tmp;
        ptr = ptr->next;
      }
      a = a->next;
      b = b->next;
    } else if (a->data < b->data) {
      a = a->next;
    } else {
      b = b->next;
    }
  }
  return head;
}
```


## <span class="org-todo todo TODO">TODO</span> Intersection point of two linked lists <span class="tag"><span class="ll">ll</span></span> {#intersection-point-of-two-linked-lists}

<https://leetcode.com/problems/intersection-of-two-linked-lists/>

```cpp
class Solution {
public:
  ListNode *getIntersectionNode(ListNode *A, ListNode *B) {
    if (A == NULL || B == NULL) {
      return NULL;
    }

    ListNode *a = A;
    ListNode *b = B;

    while (a != b) {
      if (a == NULL) {
        a = B;
      }
      if (b == NULL) {
        b = A;
      }
      if (a == b) {
        break;
      } else {
        a = a->next;
        b = b->next;
      }
    }
    return a;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Merge sort for linked lists <span class="tag"><span class="ll">ll</span></span> {#merge-sort-for-linked-lists}

<https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1>


## <span class="org-todo todo TODO">TODO</span> Quicksort for linked lists <span class="tag"><span class="ll">ll</span></span> {#quicksort-for-linked-lists}

<https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1>


## <span class="org-todo done DONE">DONE</span> Find the middle element of a linked list <span class="tag"><span class="ll">ll</span></span> {#find-the-middle-element-of-a-linked-list}

<https://leetcode.com/problems/middle-of-the-linked-list/>

```cpp
class Solution {
public:
  ListNode *middleNode(ListNode *head) {
    ListNode *slow = head;
    ListNode *fast = head;

    while (fast != nullptr && fast->next != nullptr) {
      slow = slow->next;
      fast = fast->next->next;
    }

    return slow;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Check if a linked list is a circular linked list <span class="tag"><span class="ll">ll</span></span> {#check-if-a-linked-list-is-a-circular-linked-list}

<https://practice.geeksforgeeks.org/problems/circular-linked-list/1>

```cpp
bool isCircular(Node *head) {
  if (head == nullptr) {
    return true;
  }

  Node *curr = head->next;

  while (curr != nullptr) {
    if (curr == head) {
      return true;
    }
    curr = curr->next;
  }

  return false;
}
```


## <span class="org-todo done DONE">DONE</span> Split a circular linked list into two halves <span class="tag"><span class="ll">ll</span></span> {#split-a-circular-linked-list-into-two-halves}

<https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1>

```cpp
void splitList(Node *head, Node **head1_ref, Node **head2_ref)
{
    if (head == nullptr) return;

    Node *fast = head, *slow = head;

    while (fast->next != head && fast->next->next != head) {
        slow = slow->next;
        fast = fast->next->next;
    }

    if (fast->next->next == head) {
        fast = fast->next;
    }

    *head1_ref = head;

    if (head->next != head) {
        *head2_ref = slow->next;
    }

    fast->next = slow->next;
    slow->next = head;
}
```


## <span class="org-todo done DONE">DONE</span> Check whether the singly linked list is a palindrome <span class="tag"><span class="ll">ll</span></span> {#check-whether-the-singly-linked-list-is-a-palindrome}

<https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1>

Reverse second half of linked list, compare, then revert.

```cpp
class Solution {
  Node *reverseLL(Node *head) {
    Node *curr = head, *prev = nullptr, *next;

    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }

public:
  // Function to check whether the list is palindrome.
  bool isPalindrome(Node *head) {
    int ctr = 0;
    Node *slow = head, *fast = head;

    if (head == nullptr || head->next == nullptr) {
      return true;
    }

    while (slow != nullptr) {
      slow = slow->next;
      ctr++;
    }

    slow = head;

    while (fast != nullptr) {
      slow = slow->next;
      fast = fast->next;

      if (fast != nullptr) {
        fast = fast->next;
      }
    }

    slow = reverseLL(slow);
    fast = head;

    while (slow != nullptr) {
      if (fast->data != slow->data) {
        return false;
      }
      slow = slow->next;
      fast = fast->next;
    }

    return true;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Deletion from a circular linked list <span class="tag"><span class="ll">ll</span></span> {#deletion-from-a-circular-linked-list}

<https://www.geeksforgeeks.org/deletion-circular-linked-list/>


## <span class="org-todo todo TODO">TODO</span> Reverse a doubly linked list <span class="tag"><span class="ll">ll</span></span> {#reverse-a-doubly-linked-list}

<https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1>

```cpp
Node *reverseDLL(Node *head) {
  Node *temp = nullptr;
  Node *curr = head;

  while (curr != nullptr) {
    temp = curr->prev;
    curr->prev = curr->next;
    curr->next = temp;
    curr = curr->prev;
  }

  if (temp != nullptr)
    head = temp->prev;

  return head;
}
```


## <span class="org-todo todo TODO">TODO</span> Find pairs with a given sum in a DLL <span class="tag"><span class="ll">ll</span></span> {#find-pairs-with-a-given-sum-in-a-dll}

<https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/>


## <span class="org-todo todo TODO">TODO</span> Count triplets in a sorted DLL whose sum is equal to given value X <span class="tag"><span class="ll">ll</span></span> {#count-triplets-in-a-sorted-dll-whose-sum-is-equal-to-given-value-x}

<https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/>


## <span class="org-todo todo TODO">TODO</span> Sort a K sorted doubly linked list <span class="tag"><span class="ll">ll</span></span> {#sort-a-k-sorted-doubly-linked-list}

<https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/>


## <span class="org-todo todo TODO">TODO</span> Rotate DLL by N nodes <span class="tag"><span class="ll">ll</span></span> {#rotate-dll-by-n-nodes}

<https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/>


## <span class="org-todo todo TODO">TODO</span> Rotate a doubly linked list in group of given size <span class="tag"><span class="ll">ll</span></span> {#rotate-a-doubly-linked-list-in-group-of-given-size}

<https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/>


## <span class="org-todo done DONE">DONE</span> Can we reverse a linked list in less than O(n)? <span class="tag"><span class="ll">ll</span></span> {#can-we-reverse-a-linked-list-in-less-than-o--n}

No for SLL, yes for DLL.


## <span class="org-todo todo TODO">TODO</span> Why is quicksort preferred for arrays while merge sort for linked lists? <span class="tag"><span class="ll">ll</span></span> {#why-is-quicksort-preferred-for-arrays-while-merge-sort-for-linked-lists}

Quicksort is also one of the efficient algorithms with the average time complexity of O(nlogn). But the worst-case time complexity is O(n^2). Also, variations of the quick sort like randomized quicksort are not efficient for the linked list because unlike arrays, random access in the linked list is not possible in O(1) time. If we sort the linked list using quicksort, we would end up using the head as a pivot element which may not be efficient in all scenarios.


## <span class="org-todo todo TODO">TODO</span> Flatten a linked list <span class="tag"><span class="ll">ll</span></span> {#flatten-a-linked-list}

<https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1>

```cpp
Node *merge(Node *a, Node *b) {
  if (a == nullptr) {
    return b;
  }
  if (b == nullptr) {
    return a;
  }

  Node *result = nullptr;

  if (a->data < b->data) {
    result = a;
    result->bottom = merge(a->bottom, b);
  } else {
    result = b;
    result->bottom = merge(a, b->bottom);
  }

  result->next = nullptr;
  return result;
}

Node *flatten(Node *root) {
  if (root == nullptr || root->next == nullptr) {
    return root;
  }

  root->next = flatten(root->next);
  root = merge(root, root->next);

  return root;
}
```


## <span class="org-todo todo TODO">TODO</span> Sort a ll of 0s, 1s and 2s <span class="tag"><span class="ll">ll</span></span> {#sort-a-ll-of-0s-1s-and-2s}

<https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1>


## <span class="org-todo todo TODO">TODO</span> Clone a linked list with next and random pointer <span class="tag"><span class="ll">ll</span></span> {#clone-a-linked-list-with-next-and-random-pointer}

<https://leetcode.com/problems/copy-list-with-random-pointer/>

Inefficient

```cpp
class Solution {
public:
  Node *copyRandomList(Node *head) {
    map<Node *, Node *> mp;

    for (Node *c = head; c != nullptr; c = c->next)
      mp[c] = new Node(c->val);

    for (Node *c = head; c != nullptr; c = c->next) {
      mp[c]->next = mp[c->next];
      mp[c]->random = mp[c->random];
    }

    return mp[head];
  }
};
```

Optimised

```cpp
class Solution {
public:
  Node *copyRandomList(Node *head) {
    Node *iter = head;
    Node *front = head;

    while (iter != nullptr) {
      front = iter->next;

      Node *copy = new Node(iter->val);
      iter->next = copy;
      copy->next = front;

      iter = front;
    }

    iter = head;
    while (iter != nullptr) {
      if (iter->random != nullptr) {
        iter->next->random = iter->random->next;
      }
      iter = iter->next->next;
    }

    iter = head;
    Node *pseudoHead = new Node(0);
    Node *copy = pseudoHead;

    while (iter != nullptr) {
      front = iter->next->next;

      copy->next = iter->next;

      iter->next = front;

      copy = copy->next;
      iter = front;
    }

    return pseudoHead->next;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Multiply 2 numbers represented by ll <span class="tag"><span class="ll">ll</span></span> {#multiply-2-numbers-represented-by-ll}

<https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1>


## <span class="org-todo todo TODO">TODO</span> Delete nodes which have a greater value on right side <span class="tag"><span class="ll">ll</span></span> {#delete-nodes-which-have-a-greater-value-on-right-side}

<https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1>


## <span class="org-todo todo TODO">TODO</span> Segregate even and odd nodes in a linked list <span class="tag"><span class="ll">ll</span></span> {#segregate-even-and-odd-nodes-in-a-linked-list}

<https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0>


## <span class="org-todo todo TODO">TODO</span> Program for Nth node from the end of a linked list <span class="tag"><span class="ll">ll</span></span> {#program-for-nth-node-from-the-end-of-a-linked-list}

<https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1>


## <span class="org-todo todo TODO">TODO</span> Find the first non-repeating character from a stream of characters <span class="tag"><span class="ll">ll</span></span> {#find-the-first-non-repeating-character-from-a-stream-of-characters}

<https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0>


## <span class="org-todo done DONE">DONE</span> Level order traversal <span class="tag"><span class="bt">bt</span></span> {#level-order-traversal}

<https://practice.geeksforgeeks.org/problems/level-order-traversal/1>

BFS

```cpp
class Solution {
private:
  vector<vector<int>> ret;

public:
  vector<vector<int>> levelOrder(TreeNode *root) {
    buildVector(root, 0);
    return ret;
  }

  void buildVector(TreeNode *root, int depth) {
    if (root == NULL)
      return;
    if (ret.size() == depth)
      ret.push_back(vector<int>());

    ret[depth].push_back(root->val);
    buildVector(root->left, depth + 1);
    buildVector(root->right, depth + 1);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Reverse level order traversal <span class="tag"><span class="bt">bt</span></span> {#reverse-level-order-traversal}

<https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1>


## <span class="org-todo done DONE">DONE</span> Height of a tree <span class="tag"><span class="bt">bt</span></span> {#height-of-a-tree}

<https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1>

```cpp
class Solution {
public:
  int maxDepth(TreeNode *root) {
    if (root == nullptr)
      return 0;

    return 1 + max(maxDepth(root->left), maxDepth(root->right));
  }
};
```


## <span class="org-todo done DONE">DONE</span> Diameter of a tree <span class="tag"><span class="bt">bt</span></span> {#diameter-of-a-tree}

<https://leetcode.com/problems/diameter-of-binary-tree/>
Leetcode expects diamater of tree to be number of edges, ∴ return `res - 1`

```cpp
class Solution {
    int diameter = 0;
public:
    int diameterOfBinaryTree(TreeNode* root) {
        diam(root);
        return diameter - 1;
    }

    int diam(TreeNode* root) {
        if(root == nullptr) return 0;

        int ld = diam(root->left);
        int rd = diam(root->right);

        int childD = max(ld, rd) + 1;
        int currD = ld + rd + 1;
        diameter = max({diameter, childD, currD});
        return childD;
    }
};
```


## <span class="org-todo done DONE">DONE</span> Mirror of a tree <span class="tag"><span class="bt">bt</span></span> {#mirror-of-a-tree}

<https://leetcode.com/problems/invert-binary-tree/>

```cpp
class Solution {
  void swapNode(TreeNode *root) {
    if (root == nullptr) {
      return;
    }

    swapNode(root->left);
    swapNode(root->right);

    TreeNode *temp = root->left;
    root->left = root->right;
    root->right = temp;
  }

public:
  TreeNode *invertTree(TreeNode *root) {
    swapNode(root);
    return root;
  }
};
```


## <span class="org-todo todo HOLD">HOLD</span> Inorder traversal of a tree <span class="tag"><span class="bt">bt</span></span> {#inorder-traversal-of-a-tree}

<https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/>

Left, Root, Right

Recursive

```cpp
void inorder(Node *root) {
  if (root == nullptr) {
    return;
  }

  inorder(root->left);

  cout << root->data << " ";

  inorder(root->right);
}
```

Iterative: use stack

```cpp
void inorderIterative(Node *root) {
  stack<Node *> stack;

  Node *curr = root;

  while (!stack.empty() || curr != nullptr) {
    if (curr != nullptr) {
      stack.push(curr);
      curr = curr->left;
    } else {
      curr = stack.top();
      stack.pop();
      cout << curr->data << " ";

      curr = curr->right;
    }
  }
}
```


## <span class="org-todo todo HOLD">HOLD</span> Preorder traversal of a tree <span class="tag"><span class="bt">bt</span></span> {#preorder-traversal-of-a-tree}

<https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/>

Root, Left, Right

Recursive

```cpp
void preorder(Node *root) {
  if (root == nullptr) {
    return;
  }

  cout << root->data << " ";

  preorder(root->left);

  preorder(root->right);
}
```

Iterative: use stack

```cpp
void preorderIterative(Node *root) {
  if (root == nullptr)
    return;

  stack<Node *> stack;
  stack.push(root);

  while (!stack.empty()) {
    Node *curr = stack.top();
    stack.pop();

    cout << curr->data << " ";

    if (curr->right) {
      stack.push(curr->right);
    }

    if (curr->left) {
      stack.push(curr->left);
    }
  }
}
```


## <span class="org-todo todo HOLD">HOLD</span> Postorder traversal of a tree <span class="tag"><span class="bt">bt</span></span> {#postorder-traversal-of-a-tree}

<https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/>

Left, Right, Root

Recursive

```cpp
void postorder(Node *root) {
  if (root == nullptr) {
    return;
  }

  postorder(root->left);

  postorder(root->right);

  cout << root->data << " ";
}
```

Iterative: use stack

```cpp
void postorderIterative(Node *root) {
  stack<Node *> s;
  s.push(root);

  stack<int> out;

  while (!s.empty()) {
    Node *curr = s.top();
    s.pop();

    out.push(curr->data);

    if (curr->left) {
      s.push(curr->left);
    }

    if (curr->right) {
      s.push(curr->right);
    }
  }

  while (!out.empty()) {
    cout << out.top() << " ";
    out.pop();
  }
}
```


## <span class="org-todo done DONE">DONE</span> Right view of a tree <span class="tag"><span class="bt">bt</span></span> {#right-view-of-tree}

<https://leetcode.com/problems/binary-tree-right-side-view/>

```cpp
class Solution {
  vector<int> v;
  void rightViewUtil(TreeNode *root, int lvl) {
    if (root == nullptr)
      return;
    if (v.size() <= lvl)
      v.push_back(root->val);

    rightViewUtil(root->right, lvl + 1);
    rightViewUtil(root->left, lvl + 1);
  }

public:
  vector<int> rightSideView(TreeNode *root) {
    rightViewUtil(root, 0);
    return v;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Left view of a tree <span class="tag"><span class="bt">bt</span></span> {#left-view-of-a-tree}

<https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1>

```cpp
void leftViewUtil(Node *root, vector<int> &v, int lvl) {
  if (root == nullptr)
    return;

  if (v.size() <= lvl) {
    v.push_back(root->data);
  }

  leftViewUtil(root->left, v, lvl + 1);
  leftViewUtil(root->right, v, lvl + 1);
}

vector<int> leftView(Node *root) {
  vector<int> v;
  leftViewUtil(root, v, 0);
  return v;
}
```


## <span class="org-todo todo TODO">TODO</span> Top view of a tree <span class="tag"><span class="bt">bt</span></span> {#top-view-of-a-tree}

<https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1>


## <span class="org-todo todo TODO">TODO</span> Bottom view of a tree <span class="tag"><span class="bt">bt</span></span> {#bottom-view-of-a-tree}

<https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1>


## <span class="org-todo todo TODO">TODO</span> Zig-zag traversal of a binary tree <span class="tag"><span class="bt">bt</span></span> {#zig-zag-traversal-of-a-binary-tree}

<https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1>


## <span class="org-todo todo TODO">TODO</span> Check if a tree is balanced <span class="tag"><span class="bt">bt</span></span> {#check-if-a-tree-is-balanced}

<https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1>

```cpp
bool balancedUtil(Node *root, int &height) {
  int lh = 0, rh = 0;

  if (root == nullptr) {
    height = 0;
    return 1;
  }

  int l = balancedUtil(root->left, lh);
  int r = balancedUtil(root->right, rh);

  height = max(lh, rh) + 1;

  if (abs(lh - rh) > 1)
    return 0;

  else
    return l && r;
}

bool isBalanced(Node *root) {
  int height = 0;
  return balancedUtil(root, height);
}
```


## <span class="org-todo todo TODO">TODO</span> Diagonal traversal of a binary tree <span class="tag"><span class="bt">bt</span></span> {#diagonal-traversal-of-a-binary-tree}

<https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/>


## <span class="org-todo todo TODO">TODO</span> Boundary traversal of a binary tree <span class="tag"><span class="bt">bt</span></span> {#boundary-traversal-of-a-binary-tree}

<https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1>


## <span class="org-todo todo TODO">TODO</span> Construct binary tree from string with bracket representation <span class="tag"><span class="bt">bt</span></span> {#construct-binary-tree-from-string-with-bracket-representation}

<https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/>


## <span class="org-todo todo TODO">TODO</span> Convert binary tree into doubly linked list <span class="tag"><span class="bt">bt</span></span> {#convert-binary-tree-into-doubly-linked-list}

<https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1>


## <span class="org-todo done DONE">DONE</span> Convert binary tree into sum tree <span class="tag"><span class="bt">bt</span></span> {#convert-binary-tree-into-sum-tree}

<https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1>

```cpp
class Solution {
  int sumUtil(Node *node) {
    if (node == nullptr)
      return 0;

    int tmp = node->data;

    int leftSum = sumUtil(node->left);
    int rightSum = sumUtil(node->right);

    node->data = leftSum + rightSum;
    return node->data + tmp;
  }

public:
  void toSumTree(Node *node) {
    sumUtil(node);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Construct binary tree from inorder and preorder traversal <span class="tag"><span class="bt">bt</span></span> {#construct-binary-tree-from-inorder-and-preorder-traversal}

<https://practice.geeksforgeeks.org/problems/construct-tree-1/1>


## <span class="org-todo todo TODO">TODO</span> Find minimum swaps required to convert a binary tree into BST <span class="tag"><span class="bt">bt</span></span> {#find-minimum-swaps-required-to-convert-a-binary-tree-into-bst}

<https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/>


## <span class="org-todo done DONE">DONE</span> Check if binary tree is sum tree <span class="tag"><span class="bt">bt</span></span> {#check-if-binary-tree-is-sum-tree}

<https://practice.geeksforgeeks.org/problems/sum-tree/1>

```cpp
class Solution
{
    int sumUtil(Node *root) {
        if (root == nullptr) return 0;

        return sumUtil(root->left) + sumUtil(root->right) + root->data;
    }

    public:
    bool isSumTree(Node* root)
    {
        if (root == nullptr ||
            (root->left == nullptr && root->right == nullptr)) {
            return true;
        }

        if (root->data == sumUtil(root->left) + sumUtil(root->right)
            && isSumTree(root->left) && isSumTree(root->right)) {
            return true;
        }
    }
};
```


## <span class="org-todo todo TODO">TODO</span> Check if all leaf nodes are at same level <span class="tag"><span class="bt">bt</span></span> {#check-if-all-leaf-nodes-are-at-same-level}

<https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1>


## <span class="org-todo todo TODO">TODO</span> Check if a binary tree contains duplicate subtrees of size 2 or more <span class="tag"><span class="bt">bt</span></span> {#check-if-a-binary-tree-contains-duplicate-subtrees-of-size-2-or-more}

<https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1>


## <span class="org-todo todo TODO">TODO</span> Check if 2 trees are mirror <span class="tag"><span class="bt">bt</span></span> {#check-if-2-trees-are-mirror}

<https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0>


## <span class="org-todo todo TODO">TODO</span> Sum of nodes on the longest path from root to leaf node <span class="tag"><span class="bt">bt</span></span> {#sum-of-nodes-on-the-longest-path-from-root-to-leaf-node}

<https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1>


## <span class="org-todo todo TODO">TODO</span> Check if given graph is tree <span class="tag"><span class="bt">bt</span></span> {#check-if-given-graph-is-tree}

<https://www.geeksforgeeks.org/check-given-graph-tree/>


## <span class="org-todo todo TODO">TODO</span> Find largest subtree sum in a tree <span class="tag"><span class="bt">bt</span></span> {#find-largest-subtree-sum-in-a-tree}

<https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/>


## <span class="org-todo todo TODO">TODO</span> Maximum sum of nodes in binary tree such that no two are adjacent <span class="tag"><span class="bt">bt</span></span> {#maximum-sum-of-nodes-in-binary-tree-such-that-no-two-are-adjacent}

<https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/>


## <span class="org-todo todo TODO">TODO</span> Print all K sum paths in a binary tree <span class="tag"><span class="bt">bt</span></span> {#print-all-k-sum-paths-in-a-binary-tree}

<https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/>


## <span class="org-todo todo TODO">TODO</span> Find LCA in a binary tree <span class="tag"><span class="bt">bt</span></span> {#find-lca-in-a-binary-tree}

<https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/>

```cpp
class Solution {
public:
  TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q) {
    if (root == nullptr) {
      return root;
    }

    if (root == p || root == q) {
      return root;
    }

    TreeNode *lt = lowestCommonAncestor(root->left, p, q);
    TreeNode *rt = lowestCommonAncestor(root->right, p, q);

    if (lt && rt) {
      return root;
    } else {
      return lt ? lt : rt;
    }
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find distance between 2 nodes in a binary tree <span class="tag"><span class="bt">bt</span></span> {#find-distance-between-2-nodes-in-a-binary-tree}

<https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1>


## <span class="org-todo todo TODO">TODO</span> Kth ancestor of node in a binary tree <span class="tag"><span class="bt">bt</span></span> {#kth-ancestor-of-node-in-a-binary-tree}

<https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/>


## <span class="org-todo todo TODO">TODO</span> Find all duplicate subtrees in a binary tree <span class="tag"><span class="bt">bt</span></span> {#find-all-duplicate-subtrees-in-a-binary-tree}

<https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1>


## <span class="org-todo todo TODO">TODO</span> Tree isomorphism <span class="tag"><span class="bt">bt</span></span> {#tree-isomorphism}

<https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1>


## <span class="org-todo done DONE">DONE</span> Find a value in a BST <span class="tag"><span class="bst">bst</span></span> {#find-a-value-in-a-bst}

<https://leetcode.com/problems/search-in-a-binary-search-tree/>

```cpp
class Solution {
public:
  TreeNode *searchBST(TreeNode *root, int val) {
    if (root == nullptr)
      return nullptr;

    if (root->val == val)
      return root;
    else if (val < root->val)
      return searchBST(root->left, val);
    else
      return searchBST(root->right, val);
  }
};
```


## <span class="org-todo done DONE">DONE</span> Find min and max value in a BST <span class="tag"><span class="bst">bst</span></span> {#find-min-and-max-value-in-a-bst}

<https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1>

```cpp
int minValue(Node* root) {
    if (root == nullptr) return -1;

    if  (root->left == nullptr) return root->data;

    return minValue(root->left);
}
```


## <span class="org-todo done DONE">DONE</span> Find inorder successor and inorder predecessor in a BST <span class="tag"><span class="bst">bst</span></span> {#find-inorder-successor-and-inorder-predecessor-in-a-bst}

<https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1>

```cpp
void findPreSuc(Node* root, Node*& pre, Node*& suc, int key) {
    if (root == nullptr) return;

    if (root->key > key) {
        suc = root;
        findPreSuc(root->left, pre, suc, key);
    } else if (root->key < key) {
        pre = root;
        findPreSuc(root->right, pre, suc, key);
    } else {
        if (root->left != nullptr) {
            Node *tmp = root->left;
            while (tmp->right != nullptr) tmp = tmp->right;
            pre = tmp;
        }
        if (root->right != nullptr) {
            Node *tmp = root->right;
            while (tmp->left != nullptr) tmp = tmp->left;
            suc = tmp;
        }
    }
}
```


## <span class="org-todo done DONE">DONE</span> Deletion of a node in a BST <span class="tag"><span class="bst">bst</span></span> {#deletion-of-a-node-in-a-bst}

<https://leetcode.com/problems/delete-node-in-a-bst/>

```cpp
class Solution {
    TreeNode *findSuccessor(TreeNode *root){
        if (root->left == nullptr) return root;

        return findSuccessor(root->left);
    }
    public:
    TreeNode *deleteNode(TreeNode *root, int key) {
        if(root == nullptr) return root;

        if(root->val > key) {
            root->left = deleteNode(root->left, key);
        } else if(root->val < key){
            root->right = deleteNode(root->right, key);
        } else {
            if (root->left == nullptr && root->right == nullptr) {
                return nullptr;
            }
            if (root->left == nullptr) return root->right;
            else if (root->right == nullptr) return root->left;

            TreeNode* successor = findSuccessor(root->right);
            root->val = successor->val;
            root->right = deleteNode(root->right, successor->val);
        }
        return root;
    }
};
```


## <span class="org-todo done DONE">DONE</span> Check if a tree is a BST <span class="tag"><span class="bst">bst</span></span> {#check-if-a-tree-is-a-bst}

<https://leetcode.com/problems/validate-binary-search-tree/>

```cpp
class Solution {
  bool isValidBSTUtil(TreeNode *root, long l, long r) {
    if (root == nullptr) {
      return true;
    }

    if (root->val <= l || root->val >= r) {
      return false;
    }

    return isValidBSTUtil(root->left, l, root->val) &&
           isValidBSTUtil(root->right, root->val, r);
  }

public:
  bool isValidBST(TreeNode *root) {
    return isValidBSTUtil(root, LONG_MIN, LONG_MAX);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Populate inorder successor of all nodes <span class="tag"><span class="bst">bst</span></span> {#populate-inorder-successor-of-all-nodes}

<https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1>


## <span class="org-todo todo TODO">TODO</span> Find LCA in a BST <span class="tag"><span class="bst">bst</span></span> {#find-lca-of-2-nodes-in-a-bst}

<https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1>

```cpp
class Solution {
public:
  TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q) {
    if (root == nullptr)
      return root;

    if (root == p || root == q)
      return root;

    int rootVal = root->val, pVal = p->val, qVal = q->val;

    if (rootVal < pVal && rootVal < qVal) {
      return lowestCommonAncestor(root->right, p, q);
    } else if (rootVal > pVal && rootVal > qVal) {
      return lowestCommonAncestor(root->left, p, q);
    } else {
      return root;
    }
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Construct BST from preorder traversal <span class="tag"><span class="bst">bst</span></span> {#construct-bst-from-preorder-traversal}

<https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/>


## <span class="org-todo todo TODO">TODO</span> Convert binary tree into BST <span class="tag"><span class="bst">bst</span></span> {#convert-binary-tree-into-bst}

<https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1>


## <span class="org-todo todo TODO">TODO</span> Convert a normal BST into a balanced BST <span class="tag"><span class="bst">bst</span></span> {#convert-a-normal-bst-into-a-balanced-bst}

<https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/>


## <span class="org-todo todo TODO">TODO</span> Merge two BST <span class="tag"><span class="bst">bst</span></span> {#merge-two-bst}

<https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/>


## <span class="org-todo todo TODO">TODO</span> Find Kth largest element in a BST <span class="tag"><span class="bst">bst</span></span> {#find-kth-largest-element-in-a-bst}

<https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1>


## <span class="org-todo todo TODO">TODO</span> Find Kth smallest element in a BST <span class="tag"><span class="bst">bst</span></span> {#find-kth-smallest-element-in-a-bst}

<https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1>


## <span class="org-todo todo TODO">TODO</span> Count pairs from 2 BST whose sum is equal to given value X <span class="tag"><span class="bst">bst</span></span> {#count-pairs-from-2-bst-whose-sum-is-equal-to-given-value-x}

<https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1>


## <span class="org-todo todo TODO">TODO</span> Find the median of BST in O(n) time and O(1) space <span class="tag"><span class="bst">bst</span></span> {#find-the-median-of-bst-in-o--n--time-and-o--1--space}

<https://www.geeksforgeeks.org/find-median-bst-time-O(1)-space/>


## <span class="org-todo todo TODO">TODO</span> Count BST nodes that lie in a given range <span class="tag"><span class="bst">bst</span></span> {#count-bst-nodes-that-lie-in-a-given-range}

<https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1>


## <span class="org-todo todo TODO">TODO</span> Replace every element with the least greater element on its right <span class="tag"><span class="bst">bst</span></span> {#replace-every-element-with-the-least-greater-element-on-its-right}

<https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/>


## <span class="org-todo todo TODO">TODO</span> Given N appointments, find the conflicting appointments <span class="tag"><span class="bst">bst</span></span> {#given-n-appointments-find-the-conflicting-appointments}

<https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/>


## <span class="org-todo todo TODO">TODO</span> Check preorder is valid <span class="tag"><span class="bst">bst</span></span> {#check-preorder-is-valid}

<https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0>


## <span class="org-todo todo TODO">TODO</span> Check whether BST contains dead end <span class="tag"><span class="bst">bst</span></span> {#check-whether-bst-contains-dead-end}

<https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1>


## <span class="org-todo todo TODO">TODO</span> Largest BST in a binary tree <span class="tag"><span class="bst">bst</span></span> {#largest-bst-in-a-binary-tree}

<https://practice.geeksforgeeks.org/problems/largest-bst/1>


## <span class="org-todo todo TODO">TODO</span> Flatten BST to sorted list <span class="tag"><span class="bst">bst</span></span> {#flatten-bst-to-sorted-list}

<https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/>


## <span class="org-todo done DONE">DONE</span> Activity selection <span class="tag"><span class="greedy">greedy</span></span> {#activity-selection}

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


## <span class="org-todo todo TODO">TODO</span> Job sequencing <span class="tag"><span class="greedy">greedy</span></span> {#job-sequencing}

<https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0>


## <span class="org-todo todo TODO">TODO</span> Huffman coding <span class="tag"><span class="greedy">greedy</span></span> {#huffman-coding}

<https://practice.geeksforgeeks.org/problems/huffman-encoding/0>


## <span class="org-todo todo TODO">TODO</span> Water connection <span class="tag"><span class="greedy">greedy</span></span> {#water-connection}

<https://practice.geeksforgeeks.org/problems/water-connection-problem/0>


## <span class="org-todo todo TODO">TODO</span> Fractional knapsack <span class="tag"><span class="greedy">greedy</span></span> {#fractional-knapsack}

<https://practice.geeksforgeeks.org/problems/fractional-knapsack/0>

```cpp
class Solution {
public:
  double fractionalKnapsack(int W, Item arr[], int n) {
    sort(arr, arr + n, [](const Item &a, const Item &b) {
      return ((double)a.value / a.weight) > (double)b.value / b.weight;
    });

    int currWeight = 0;
    double cost = 0;

    for (int i = 0; i < n; i++) {
      if (arr[i].weight + currWeight <= W) {
        currWeight += arr[i].weight;
        cost += arr[i].value;
      } else {
        cost += (arr[i].value / (double)arr[i].weight) * (W - currWeight);
        break;
      }
    }
    return cost;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find minimum number of coins <span class="tag"><span class="greedy">greedy</span></span> {#find-minimum-number-of-coins}

<https://practice.geeksforgeeks.org/problems/coin-piles/0>

```cpp
class Solution {
public:
  int coinChange(vector<int> &coins, int amount) {
    int n = coins.size();
    int dp[n + 1][amount + 1];

    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= amount; j++) {
        if (j == 0) {
          dp[i][j] = 0;
        }
        if (i == 0) {
          dp[i][j] = INT_MAX - 1;
        }
      }
    }

    dp[0][0] = 0;

    for (int i = 1; i <= n; i++)
      for (int j = 1; j <= amount; j++) {
        if (coins[i - 1] <= j) {
          dp[i][j] = min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }

    return dp[n][amount] == INT_MAX - 1 ? -1 : dp[n][amount];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Maximum trains for which stoppage can be provided <span class="tag"><span class="greedy">greedy</span></span> {#maximum-trains-for-which-stoppage-can-be-provided}

<https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/>


## <span class="org-todo todo TODO">TODO</span> Minimum platforms <span class="tag"><span class="greedy">greedy</span></span> {#minimum-platforms}

<https://practice.geeksforgeeks.org/problems/minimum-platforms/0>


## <span class="org-todo todo TODO">TODO</span> Buy maximum stocks if I stocks can be bought on Ith day <span class="tag"><span class="greedy">greedy</span></span> {#buy-maximum-stocks-if-i-stocks-can-be-bought-on-ith-day}

<https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/>


## <span class="org-todo todo TODO">TODO</span> Find the minimum and maximum amount to buy all N candies <span class="tag"><span class="greedy">greedy</span></span> {#find-the-minimum-and-maximum-amount-to-buy-all-n-candies}

<https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0>


## <span class="org-todo todo TODO">TODO</span> Minimum cost to cut a board into squares <span class="tag"><span class="greedy">greedy</span></span> {#minimum-cost-to-cut-a-board-into-squares}

<https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/>


## <span class="org-todo todo TODO">TODO</span> Check if it is possible to survive on island <span class="tag"><span class="greedy">greedy</span></span> {#check-if-it-is-possible-to-survive-on-island}

<https://www.geeksforgeeks.org/survival/>


## <span class="org-todo todo TODO">TODO</span> Find maximum meetings in one room <span class="tag"><span class="greedy">greedy</span></span> {#find-maximum-meetings-in-one-room}

<https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/>


## <span class="org-todo todo TODO">TODO</span> Maximum product subset of an array <span class="tag"><span class="greedy">greedy</span></span> {#maximum-product-subset-of-an-array}

<https://www.geeksforgeeks.org/maximum-product-subset-array/>


## <span class="org-todo todo TODO">TODO</span> Maximize array sum after K negations <span class="tag"><span class="greedy">greedy</span></span> {#maximize-array-sum-after-k-negations}

<https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0>


## <span class="org-todo todo TODO">TODO</span> Maximize the sum of arr[i]\*i <span class="tag"><span class="greedy">greedy</span></span> {#maximize-the-sum-of-arr-i-i}

<https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array/0>


## <span class="org-todo todo TODO">TODO</span> Maximum sum of absolute difference of an array <span class="tag"><span class="greedy">greedy</span></span> {#maximum-sum-of-absolute-difference-of-an-array}

<https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/>


## <span class="org-todo todo TODO">TODO</span> Maximize sum of consecutive differences in a circular array <span class="tag"><span class="greedy">greedy</span></span> {#maximize-sum-of-consecutive-differences-in-a-circular-array}

<https://practice.geeksforgeeks.org/problems/swap-and-maximize/0>


## <span class="org-todo todo TODO">TODO</span> Minimum sum of absolute difference of pairs of two arrays <span class="tag"><span class="greedy">greedy</span></span> {#minimum-sum-of-absolute-difference-of-pairs-of-two-arrays}

<https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/>


## <span class="org-todo todo TODO">TODO</span> Shortest Job First (SJF) CPU scheduling <span class="tag"><span class="greedy">greedy</span></span> {#shortest-job-first--sjf--cpu-scheduling}

<https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/>


## <span class="org-todo todo TODO">TODO</span> Least Recently Used (LRU) page replacement algorithm <span class="tag"><span class="greedy">greedy</span></span> {#least-recently-used--lru--page-replacement-algorithm}

<https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0>


## <span class="org-todo todo TODO">TODO</span> Smallest subset with sum greater than all other elements <span class="tag"><span class="greedy">greedy</span></span> {#smallest-subset-with-sum-greater-than-all-other-elements}

<https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/>


## <span class="org-todo todo TODO">TODO</span> Defense of a kingdom <span class="tag"><span class="greedy">greedy</span></span> {#defense-of-a-kingdom}

<https://www.spoj.com/problems/DEFKIN/>


## <span class="org-todo todo TODO">TODO</span> Die hard <span class="tag"><span class="greedy">greedy</span></span> {#die-hard}

<https://www.spoj.com/problems/DIEHARD/>


## <span class="org-todo todo TODO">TODO</span> Wine trading in Gergovia <span class="tag"><span class="greedy">greedy</span></span> {#wine-trading-in-gergovia}

<https://www.spoj.com/problems/GERGOVIA/>


## <span class="org-todo todo TODO">TODO</span> Picking up chicks <span class="tag"><span class="greedy">greedy</span></span> {#picking-up-chicks}

<https://www.spoj.com/problems/GCJ101BB/>


## <span class="org-todo todo TODO">TODO</span> Chocolate <span class="tag"><span class="greedy">greedy</span></span> {#chocolate}

<https://www.spoj.com/problems/CHOCOLA/>


## <span class="org-todo todo TODO">TODO</span> Arranging amplifiers <span class="tag"><span class="greedy">greedy</span></span> {#arranging-amplifiers}

<https://www.spoj.com/problems/ARRANGE/>


## <span class="org-todo todo TODO">TODO</span> K centers <span class="tag"><span class="greedy">greedy</span></span> {#k-centers}

<https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/>


## <span class="org-todo todo TODO">TODO</span> Find smallest number with given number of digits and sum of digits <span class="tag"><span class="greedy">greedy</span></span> {#find-smallest-number-with-given-number-of-digits-and-sum-of-digits}

<https://practice.geeksforgeeks.org/problems/smallest-number5829/1>


## <span class="org-todo todo TODO">TODO</span> Find maximum sum possible equal sum of three stacks <span class="tag"><span class="greedy">greedy</span></span> {#find-maximum-sum-possible-equal-sum-of-three-stacks}

<https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/>


## <span class="org-todo todo TODO">TODO</span> Rat in a maze <span class="tag"><span class="graph">graph</span><span class="backtracking">backtracking</span></span> {#rat-in-a-maze}

<https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1>


## <span class="org-todo todo TODO">TODO</span> Printing all solutions to N-queens <span class="tag"><span class="backtracking">backtracking</span></span> {#printing-all-solutions-to-n-queens}

<https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/>


## <span class="org-todo todo TODO">TODO</span> Remove invalid parentheses <span class="tag"><span class="backtracking">backtracking</span></span> {#remove-invalid-parentheses}

<https://leetcode.com/problems/remove-invalid-parentheses/>


## <span class="org-todo todo TODO">TODO</span> Sudoku solver <span class="tag"><span class="backtracking">backtracking</span></span> {#sudoku-solver}

<https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0>


## <span class="org-todo todo TODO">TODO</span> M coloring <span class="tag"><span class="graph">graph</span><span class="backtracking">backtracking</span></span> {#m-coloring}

<https://practice.geeksforgeeks.org/problems/m-coloring-problem/0>


## <span class="org-todo todo TODO">TODO</span> Print all palindromic partitions of a string <span class="tag"><span class="backtracking">backtracking</span></span> {#print-all-palindromic-partitions-of-a-string}

<https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/>


## <span class="org-todo todo TODO">TODO</span> Knight's tour <span class="tag"><span class="backtracking">backtracking</span></span> {#knight-s-tour}

<https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/>


## <span class="org-todo todo TODO">TODO</span> Tug of war <span class="tag"><span class="backtracking">backtracking</span></span> {#tug-of-war}

<https://www.geeksforgeeks.org/tug-of-war/>


## <span class="org-todo todo TODO">TODO</span> Find shortest safe route in a path with landmines <span class="tag"><span class="backtracking">backtracking</span></span> {#find-shortest-safe-route-in-a-path-with-landmines}

<https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/>


## <span class="org-todo todo TODO">TODO</span> Combination sum <span class="tag"><span class="backtracking">backtracking</span></span> {#combination-sum}

<https://practice.geeksforgeeks.org/problems/combination-sum/0>


## <span class="org-todo todo TODO">TODO</span> Find maximum number possible by doing atmost K swaps <span class="tag"><span class="backtracking">backtracking</span></span> {#find-maximum-number-possible-by-doing-atmost-k-swaps}

<https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0>


## <span class="org-todo todo TODO">TODO</span> Print all permutations of a string <span class="tag"><span class="string">string</span><span class="backtracking">backtracking</span></span> {#print-all-permutations-of-a-string}

<https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0>


## <span class="org-todo todo TODO">TODO</span> Longest possible route in a matrix with hurdles <span class="tag"><span class="backtracking">backtracking</span></span> {#longest-possible-route-in-a-matrix-with-hurdles}

<https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/>


## <span class="org-todo todo TODO">TODO</span> Print all possible paths from top left to bottom right of a MxN matrix <span class="tag"><span class="backtracking">backtracking</span></span> {#print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix}

<https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/>


## <span class="org-todo todo TODO">TODO</span> Partition a set into K subsets with equal sum <span class="tag"><span class="backtracking">backtracking</span></span> {#partition-a-set-into-k-subsets-with-equal-sum}

<https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1>


## <span class="org-todo todo TODO">TODO</span> Find the Kth permutation sequence of first N natural numbers <span class="tag"><span class="backtracking">backtracking</span></span> {#find-the-kth-permutation-sequence-of-first-n-natural-numbers}

<https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/>


## <span class="org-todo todo TODO">TODO</span> Implement stack from scratch <span class="tag"><span class="st_q">st-q</span></span> {#implement-stack-from-scratch}

<https://www.tutorialspoint.com/javaexamples/data_stack.htm>


## <span class="org-todo todo TODO">TODO</span> Implement queue from scratch <span class="tag"><span class="st_q">st-q</span></span> {#implement-queue-from-scratch}

<https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/>


## <span class="org-todo todo TODO">TODO</span> Implement 2 stack in an array <span class="tag"><span class="st_q">st-q</span></span> {#implement-2-stack-in-an-array}

<https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1>

```cpp
void twoStacks ::push1(int x) {
  if (abs(top1 - top2) >= 1) {
    top1++;
    arr[top1] = x;
  }
}

void twoStacks ::push2(int x) {
  if (abs(top1 - top2) >= 1) {
    top2--;
    arr[top2] = x;
  }
}

int twoStacks ::pop1() {
  int x = -1;
  if (top1 >= 0) {
    x = arr[top1];
    top1--;
  }
  return x;
}

int twoStacks ::pop2() {
  int x = -1;
  if (top2 < size) {
    x = arr[top2];
    top2++;
  }
  return x;
}
```


## <span class="org-todo todo TODO">TODO</span> Find the middle element of a stack <span class="tag"><span class="st_q">st-q</span></span> {#find-the-middle-element-of-a-stack}

<https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/>


## <span class="org-todo todo TODO">TODO</span> Implement N stacks in an array <span class="tag"><span class="st_q">st-q</span></span> {#implement-n-stacks-in-an-array}

<https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/>


## <span class="org-todo todo TODO">TODO</span> Reverse a string using stack <span class="tag"><span class="st_q">st-q</span></span> {#reverse-a-string-using-stack}

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


## <span class="org-todo todo TODO">TODO</span> Design a stack that supports getmin() in O(1) time and O(1) extra space <span class="tag"><span class="st_q">st-q</span></span> {#design-a-stack-that-supports-getmin-in-o--1--time-and-o--1--extra-space}

<https://practice.geeksforgeeks.org/problems/special-stack/1>


## <span class="org-todo todo TODO">TODO</span> Find the next greater element <span class="tag"><span class="st_q">st-q</span></span> {#find-the-next-greater-element}

<https://practice.geeksforgeeks.org/problems/next-larger-element/0>


## <span class="org-todo todo TODO">TODO</span> Celebrity <span class="tag"><span class="st_q">st-q</span></span> {#celebrity}

<https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1>


## <span class="org-todo todo TODO">TODO</span> Arithmetic expression evaluation <span class="tag"><span class="st_q">st-q</span></span> {#arithmetic-expression-evaluation}

<https://www.geeksforgeeks.org/arithmetic-expression-evalution/>


## <span class="org-todo todo TODO">TODO</span> Evaluation of postfix expression <span class="tag"><span class="st_q">st-q</span></span> {#evaluation-of-postfix-expression}

<https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0>


## <span class="org-todo todo TODO">TODO</span> Implement a method to insert an element at its bottom without using any other data structure <span class="tag"><span class="st_q">st-q</span></span> {#implement-a-method-to-insert-an-element-at-its-bottom-without-using-any-other-data-structure}

<https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack>


## <span class="org-todo todo TODO">TODO</span> Reverse a stack using recursion <span class="tag"><span class="st_q">st-q</span></span> {#reverse-a-stack-using-recursion}

<https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/>


## <span class="org-todo todo TODO">TODO</span> Sort a stack using recursion <span class="tag"><span class="st_q">st-q</span></span> {#sort-a-stack-using-recursion}

<https://practice.geeksforgeeks.org/problems/sort-a-stack/1>


## <span class="org-todo todo TODO">TODO</span> Merge overlapping intervals <span class="tag"><span class="st_q">st-q</span></span> {#merge-overlapping-intervals}

<https://practice.geeksforgeeks.org/problems/overlapping-intervals/0>


## <span class="org-todo todo TODO">TODO</span> Largest rectangular area in histogram <span class="tag"><span class="st_q">st-q</span></span> {#largest-rectangular-area-in-histogram}

<https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0>


## <span class="org-todo todo TODO">TODO</span> Length of the longest valid substring <span class="tag"><span class="st_q">st-q</span></span> {#length-of-the-longest-valid-substring}

<https://practice.geeksforgeeks.org/problems/valid-substring0624/1>


## <span class="org-todo todo TODO">TODO</span> Expression contains redundant bracket <span class="tag"><span class="st_q">st-q</span></span> {#expression-contains-redundant-bracket}

<https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/>


## <span class="org-todo todo TODO">TODO</span> Implement stack using queue <span class="tag"><span class="st_q">st-q</span></span> {#implement-stack-using-queue}

<https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1>


## <span class="org-todo todo TODO">TODO</span> Implement stack using deque <span class="tag"><span class="st_q">st-q</span></span> {#implement-stack-using-deque}

<https://www.geeksforgeeks.org/implement-stack-queue-using-deque/>


## <span class="org-todo todo TODO">TODO</span> Stack permutations <span class="tag"><span class="st_q">st-q</span></span> {#stack-permutations}

<https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/>


## <span class="org-todo todo TODO">TODO</span> Implement queue using stack <span class="tag"><span class="st_q">st-q</span></span> {#implement-queue-using-stack}

<https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1>


## <span class="org-todo todo TODO">TODO</span> Implement N queue in an array <span class="tag"><span class="st_q">st-q</span></span> {#implement-n-queue-in-an-array}

<https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/>


## <span class="org-todo todo TODO">TODO</span> Implement a circular queue <span class="tag"><span class="st_q">st-q</span></span> {#implement-a-circular-queue}

<https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/>


## <span class="org-todo todo TODO">TODO</span> LRU cache implementation <span class="tag"><span class="st_q">st-q</span></span> {#lru-cache-implementation}

<https://practice.geeksforgeeks.org/problems/lru-cache/1>


## <span class="org-todo todo TODO">TODO</span> Reverse a queue using recursion <span class="tag"><span class="st_q">st-q</span></span> {#reverse-a-queue-using-recursion}

<https://practice.geeksforgeeks.org/problems/queue-reversal/1>


## <span class="org-todo todo TODO">TODO</span> Reverse the first K elements of a queue <span class="tag"><span class="st_q">st-q</span></span> {#reverse-the-first-k-elements-of-a-queue}

<https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1>


## <span class="org-todo todo TODO">TODO</span> Interleave the first half of the queue with second half <span class="tag"><span class="st_q">st-q</span></span> {#interleave-the-first-half-of-the-queue-with-second-half}

<https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/>


## <span class="org-todo todo TODO">TODO</span> Find the first circular tour that visits all petrol pumps <span class="tag"><span class="st_q">st-q</span></span> {#find-the-first-circular-tour-that-visits-all-petrol-pumps}

<https://practice.geeksforgeeks.org/problems/circular-tour/1>


## <span class="org-todo todo TODO">TODO</span> Minimum time required to rot all oranges <span class="tag"><span class="st_q">st-q</span></span> {#minimum-time-required-to-rot-all-oranges}

<https://practice.geeksforgeeks.org/problems/rotten-oranges/0>


## <span class="org-todo todo TODO">TODO</span> Distance of nearest cell having 1 in a binary matrix <span class="tag"><span class="st_q">st-q</span></span> {#distance-of-nearest-cell-having-1-in-a-binary-matrix}

<https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0>


## <span class="org-todo todo TODO">TODO</span> First negative integer in every window of size K <span class="tag"><span class="st_q">st-q</span></span> {#first-negative-integer-in-every-window-of-size-k}

<https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0>


## <span class="org-todo todo TODO">TODO</span> Check if all levels of two trees are anagrams <span class="tag"><span class="st_q">st-q</span></span> {#check-if-all-levels-of-two-trees-are-anagrams}

<https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/>


## <span class="org-todo todo TODO">TODO</span> Sum of minimum and maximum elements of all subarrays of size K <span class="tag"><span class="st_q">st-q</span></span> {#sum-of-minimum-and-maximum-elements-of-all-subarrays-of-size-k}

<https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/>


## <span class="org-todo todo TODO">TODO</span> Minimum sum of squares of character counts in a given string after removing K characters <span class="tag"><span class="st_q">st-q</span></span> {#minimum-sum-of-squares-of-character-counts-in-a-given-string-after-removing-k-characters}

<https://practice.geeksforgeeks.org/problems/game-with-string/0>


## <span class="org-todo todo TODO">TODO</span> Next smaller element <span class="tag"><span class="st_q">st-q</span></span> {#next-smaller-element}

<https://www.geeksforgeeks.org/next-smaller-element/>


## <span class="org-todo todo TODO">TODO</span> Implement a maxheap/minheap <span class="tag"><span class="heap">heap</span></span> {#implement-a-maxheap-minheap}

<https://www.geeksforgeeks.org/building-heap-from-array/>

```cpp
#include <bits/stdc++.h>
using namespace std;

class Heap {
  vector<int> v;
  bool isMinHeap;

  bool compare(int a, int b) { return isMinHeap ? a < b : a > b; }

  void heapify(int i) {
    int left = 2 * i, right = 2 * i + 1;

    int minIdx = i;
    if (left < (int)v.size() && compare(v[left], v[minIdx])) {
      minIdx = left;
    }
    if (right < (int)v.size() && compare(v[right], v[minIdx])) {
      minIdx = right;
    }

    if (minIdx != i) {
      swap(v[i], v[minIdx]);
      heapify(minIdx);
    }
  }

public:
  Heap(bool heapType = true) {
    isMinHeap = heapType;
    v.push_back(-1);
  }

  void push(int data) {
    v.push_back(data);
    int idx = v.size() - 1;
    int parent = idx / 2;

    while (idx > 1 && compare(v[idx], v[parent])) {
      swap(v[parent], v[idx]);
      idx = parent;
      parent = idx / 2;
    }
  }

  void pop() {
    swap(v[1], v.back());
    v.pop_back();

    heapify(1);
  }

  bool empty() { return v.size() == 1; }

  int top() {
    if (!empty()) {
      return v[1];
    } else {
      return -1;
    }
  }
};

int main() {
  Heap hp;
  int n;
  cin >> n;

  while (n--) {
    int x;
    cin >> x;
    hp.push(x);
  }

  while (!hp.empty()) {
    cout << hp.top() << "\n";
    hp.pop();
  }
}
```


## <span class="org-todo todo TODO">TODO</span> Heap sort <span class="tag"><span class="heap">heap</span></span> {#heap-sort}

<https://www.geeksforgeeks.org/heap-sort/>


## <span class="org-todo todo TODO">TODO</span> Maximum of all subarrays of size K <span class="tag"><span class="heap">heap</span></span> {#maximum-of-all-subarrays-of-size-k}

<https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/>


## <span class="org-todo done DONE">DONE</span> Kth largest element in an array <span class="tag"><span class="heap">heap</span></span> {#kth-largest-element-in-an-array}

<https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1>

Make heap of size `k`, then insert remaining only if greater
Minheap for k largest, maxheap for k smallest

```cpp
class Solution {
public:
  vector<int> kLargest(int arr[], int n, int k) {
    priority_queue<int, vector<int>, greater<int>> pq(arr, arr + k);

    vector<int> res;
    for (int i = k; i < n; i++) {
      if (arr[i] > pq.top()) {
        pq.pop();
        pq.push(arr[i]);
      }
    }

    while (!pq.empty()) {
      res.push_back(pq.top());
      pq.pop();
    }

    reverse(res.begin(), res.end());

    return res;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Merge K sorted arrays <span class="tag"><span class="heap">heap</span></span> {#merge-k-sorted-arrays}

<https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1>

```cpp
class Solution {
public:
  vector<int> mergeKArrays(vector<vector<int>> arr, int k) {
    vector<int> res;
    vector<int> ptrs(k, 0);

    priority_queue<pair<int, int>, vector<pair<int, int>>,
                   greater<pair<int, int>>>
        hp;

    for (int i = 0; i < k; i++) {
      hp.push({arr[i][0], i});
    }

    for (int i = 0; i < k * k; i++) {
      pair<int, int> tmp = hp.top();
      hp.pop();
      ptrs[tmp.second]++;

      if (ptrs[tmp.second] < k) {
        hp.push({arr[tmp.second][ptrs[tmp.second]], tmp.second});
      } else {
        hp.push({INT_MAX, tmp.second});
      }

      res.push_back(tmp.first);
    }
    return res;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Merge 2 binary max heaps <span class="tag"><span class="heap">heap</span></span> {#merge-2-binary-max-heaps}

<https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0>


## <span class="org-todo todo TODO">TODO</span> Kth largest sum continuous subarrays <span class="tag"><span class="heap">heap</span></span> {#kth-largest-sum-continuous-subarrays}

<https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/>


## <span class="org-todo todo TODO">TODO</span> Reorganize strings <span class="tag"><span class="heap">heap</span></span> {#reorganize-strings}

<https://leetcode.com/problems/reorganize-string/>


## <span class="org-todo todo TODO">TODO</span> Merge K sorted linked lists <span class="tag"><span class="ll">ll</span><span class="heap">heap</span></span> {#merge-k-sorted-linked-lists}

<https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1>


## <span class="org-todo todo TODO">TODO</span> Smallest range in K lists <span class="tag"><span class="heap">heap</span></span> {#smallest-range-in-k-lists}

<https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1>


## <span class="org-todo todo TODO">TODO</span> Median in a stream of integers <span class="tag"><span class="heap">heap</span></span> {#median-in-a-stream-of-integers}

<https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0>


## <span class="org-todo todo TODO">TODO</span> Check if a binary tree is heap <span class="tag"><span class="heap">heap</span></span> {#check-if-a-binary-tree-is-heap}

<https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1>


## <span class="org-todo todo TODO">TODO</span> Connect N ropes with minimum cost <span class="tag"><span class="heap">heap</span><span class="greedy">greedy</span></span> {#connect-n-ropes-with-minimum-cost}

<https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0>

```cpp
class Solution {
public:
  long long minCost(long long arr[], long long n) {
    priority_queue<long long, vector<long long>, greater<long long>> pq(
        arr, arr + n);

    long long cost = 0;

    while (pq.size() > 1) {
      long long t1 = pq.top();
      pq.pop();
      long long t2 = pq.top();
      pq.pop();

      cost += t1 + t2;
      pq.push(t1 + t2);
    }

    return cost;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Convert BST to min heap <span class="tag"><span class="heap">heap</span></span> {#convert-bst-to-min-heap}

<https://www.geeksforgeeks.org/convert-bst-min-heap/>


## <span class="org-todo todo TODO">TODO</span> Convert min heap to max heap <span class="tag"><span class="heap">heap</span></span> {#convert-min-heap-to-max-heap}

<https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/>


## <span class="org-todo todo TODO">TODO</span> Minimum sum of two numbers formed from digits of an array <span class="tag"><span class="heap">heap</span></span> {#minimum-sum-of-two-numbers-formed-from-digits-of-an-array}

<https://practice.geeksforgeeks.org/problems/minimum-sum4058/1>


## <span class="org-todo todo STRT">STRT</span> Create and print a graph <span class="tag"><span class="graph">graph</span></span> {#create-and-print-a-graph}

<https://1drv.ms/t/s!AqTOHFO77CqEiRua06v1PATyiFg5>


## <span class="org-todo done DONE">DONE</span> Implement BFS <span class="tag"><span class="graph">graph</span></span> {#implement-bfs}

<https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1>

GfG has incorrect testcases. Always check for multiple components, which
requires the commented outer `visited` loop.

```cpp
class Solution {
  vector<int> bfsTraversal;

  void bfs(int i, vector<bool> &visited, vector<int> adj[]) {
    queue<int> q;
    visited[i] = true;
    q.push(i);

    while (!q.empty()) {
      int node = q.front();
      q.pop();
      bfsTraversal.push_back(node);

      for (int it : adj[node]) {
        if (!visited[it]) {
          visited[it] = true;
          q.push(it);
        }
      }
    }
  }

public:
  vector<int> bfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    // for (int i = 0; i < V; i++) {
      // if (!visited[i]) {
        int i = 0;
        bfs(i, visited, adj);
      // }
    // }

    return bfsTraversal;
  }
};
```


## <span class="org-todo done DONE">DONE</span> Implement DFS <span class="tag"><span class="graph">graph</span></span> {#implement-dfs}

<https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1>


### Recursive {#recursive}

```cpp
class Solution {
  vector<int> dfsTraversal;

  void dfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;
    dfsTraversal.push_back(i);

    for (vector<int>::iterator it = adj[i].begin(); it != adj[i].end(); it++) {
      if (!visited[*it]) {
        dfs(*it, visited, adj);
      }
    }
  }

public:
  vector<int> dfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);
    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfsHelper(i, visited, adj);
      }
    }

    return dfsTraversal;
  }
};
```


### Iterative {#iterative}

```cpp
class Solution {
  vector<int> dfsTraversal;

  void dfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    stack<int> st;
    visited[i] = true;
    st.push(i);

    while (!st.empty()) {
      int node = st.top();
      st.pop();
      dfsTraversal.push_back(node);

      for (int it : adj[node]) {
        if (!visited[it]) {
          visited[it] = true;
          st.push(it);
        }
      }
    }
  }

public:
  vector<int> dfsOfGraph(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfsHelper(i, visited, adj);
      }
    }

    return dfsTraversal;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Detect cycle in directed graph using BFS/DFS <span class="tag"><span class="graph">graph</span></span> {#detect-cycle-in-directed-graph-using-bfs-dfs}

<https://www.geeksforgeeks.org/detect-cycle-in-a-graph/>


### Using DFS {#using-dfs}

```cpp
class Solution {
  bool dfsHelper(int i, vector<bool> &visited, vector<bool> &visitedDirected,
                 vector<int> adj[]) {
    visited[i] = true;
    visitedDirected[i] = true;

    for (int it : adj[i]) {
      if (!visited[it]) {
        if (dfsHelper(it, visited, visitedDirected, adj)) {
          return true;
        }
      } else if (visitedDirected[it]) {
        return true;
      }
    }
    visitedDirected[i] = false;
    return false;
  }

public:
  bool isCyclic(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);
    vector<bool> visitedDirected(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        if (dfsHelper(i, visited, visitedDirected, adj)) {
          return true;
        }
      }
    }
    return false;
  }
};
```


### Using BFS {#using-bfs}

```cpp
class Solution {
public:
  bool isCyclic(int V, vector<int> adj[]) {
    vector<int> inDegree(V, 0);
    queue<int> q;

    for (int i = 0; i < V; i++) {
      for (auto it : adj[i]) {
        inDegree[it]++;
      }
    }

    for (int i = 0; i < V; i++) {
      if (inDegree[i] == 0) {
        q.push(i);
      }
    }

    int ctr = 0;

    while (!q.empty()) {
      int node = q.front();
      q.pop();
      ctr++;

      for (auto it : adj[node]) {
        inDegree[it]--;
        if (inDegree[it] == 0) {
          q.push(it);
        }
      }
    }

    if (ctr == V)
      return false;
    return true;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Detect cycle in undirected graph using BFS/DFS <span class="tag"><span class="graph">graph</span></span> {#detect-cycle-in-undirected-graph-using-bfs-dfs}

<https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1>


### DFS {#dfs}

```cpp
class Solution {
  bool dfsHelper(int i, int p, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;

    for (auto it : adj[i]) {
      if (visited[it] == false) {
        if (dfsHelper(it, i, visited, adj)) {
          return true;
        }
      } else if (it != p) {
        return true;
      }
    }
    return false;
  }

public:
  bool isCycle(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        if (dfsHelper(i, -1, visited, adj)) {
          return true;
        }
      }
    }
    return false;
  }
};
```


### BFS {#bfs}

```cpp
class Solution {
  bool bfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;
    queue<pair<int, int>> q;
    q.push({i, -1});

    while (!q.empty()) {
      int node = q.front().first;
      int parent = q.front().second;
      q.pop();

      for (auto it : adj[node]) {
        if (!visited[it]) {
          visited[it] = true;
          q.push({it, node});
        } else if (it != parent) {
          return true;
        }
      }
    }

    return false;
  }

public:
  bool isCycle(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        if (bfsHelper(i, visited, adj)) {
          return true;
        }
      }
    }
    return false;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Minimum steps by knight <span class="tag"><span class="graph">graph</span></span> {#minimum-steps-by-knight}

<https://practice.geeksforgeeks.org/problems/steps-by-knight/0>

```cpp
class pos {
public:
  int x, y, dist;

  pos(int x, int y, int dist) : x(x), y(y), dist(dist) {}
};

class Solution {
  bool isInside(int x, int y, int N) {
    return (x >= 1 and x <= N and y >= 1 and y <= N);
  }

public:
  int minStepToReachTarget(vector<int> &KnightPos, vector<int> &TargetPos,
                           int N) {
    vector<pair<int, int>> dir = {
        {-2, -1}, {-1, -2}, {1, -2}, {2, -1}, {-2, 1}, {-1, 2}, {1, 2}, {2, 1},
    };

    bool visited[N + 1][N + 1] = {0};
    queue<pos> q;

    q.push(pos(KnightPos[0], KnightPos[1], 0));
    visited[KnightPos[0]][KnightPos[1]] = true;

    while (!q.empty()) {
      pos currPos = q.front();
      q.pop();

      if (currPos.x == TargetPos[0] and currPos.y == TargetPos[1]) {
        return currPos.dist;
      }
      for (int i = 0; i < 8; i++) {
        int x = currPos.x + dir[i].first;
        int y = currPos.y + dir[i].second;

        if (isInside(x, y, N) and !visited[x][y]) {
          q.push(pos(x, y, currPos.dist + 1));
          visited[x][y] = true;
        }
      }
    }
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Flood fill algorithm <span class="tag"><span class="graph">graph</span></span> {#flood-fill-algorithm}

<https://leetcode.com/problems/flood-fill/>


## <span class="org-todo todo TODO">TODO</span> Clone a graph <span class="tag"><span class="graph">graph</span></span> {#clone-a-graph}

<https://leetcode.com/problems/clone-graph/>


## <span class="org-todo todo TODO">TODO</span> Making wired connections <span class="tag"><span class="graph">graph</span></span> {#making-wired-connections}

<https://leetcode.com/problems/number-of-operations-to-make-network-connected/>


## <span class="org-todo todo TODO">TODO</span> Word ladder <span class="tag"><span class="graph">graph</span></span> {#word-ladder}

<https://leetcode.com/problems/word-ladder/>


## <span class="org-todo todo STRT">STRT</span> Dijkstra algorithm <span class="tag"><span class="graph">graph</span></span> {#dijkstra-algorithm}

<https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/>


### Undirected, unweighted graph {#undirected-unweighted-graph}

```cpp
vector<int> minDist(int src, int V, vector<int> adj[]) {
  vector<int> distances(V, INT_MAX);
  queue<int> q;

  distances[src] = 0;
  q.push(src);

  while (!q.empty()) {
    int node = q.front();
    q.pop();

    for (auto it : adj[node]) {
      if (distances[node] + 1 > distances[it]) {
        distances[it] = distances[node] + 1;
        q.push(it);
      }
    }
  }

  return distances;
}
```


## <span class="org-todo todo TODO">TODO</span> Implement topological sort <span class="tag"><span class="graph">graph</span></span> {#implement-topological-sort}

<https://practice.geeksforgeeks.org/problems/topological-sort/1>

Topological sort is only valid for a Directed Acyclic Graph


### Using DFS {#using-dfs}

```cpp
class Solution {
  stack<int> st;
  void dfsHelper(int i, vector<bool> &visited, vector<int> adj[]) {
    visited[i] = true;

    for (auto it : adj[i]) {
      if (!visited[it]) {
        visited[it] = true;
        dfsHelper(it, visited, adj);
      }
    }

    st.push(i);
  }

public:
  vector<int> topoSort(int V, vector<int> adj[]) {
    vector<bool> visited(V, false);

    for (int i = 0; i < V; i++) {
      if (!visited[i]) {
        dfsHelper(i, visited, adj);
      }
    }

    vector<int> topoOrder;

    while (!st.empty()) {
      topoOrder.push_back(st.top());
      st.pop();
    }

    return topoOrder;
  }
};
```


### Using BFS {#using-bfs}

```cpp
class Solution {
public:
  vector<int> topoSort(int V, vector<int> adj[]) {
    vector<int> inDegree(V, 0);
    queue<int> q;
    vector<int> res;

    for (int i = 0; i < V; i++) {
      for (auto it : adj[i]) {
        inDegree[it]++;
      }
    }

    for (int i = 0; i < V; i++) {
      if (inDegree[i] == 0) {
        q.push(i);
      }
    }

    while (!q.empty()) {
      int node = q.front();
      q.pop();
      res.push_back(node);
      for (auto it : adj[node]) {
        inDegree[it]--;
        if (inDegree[it] == 0) {
          q.push(it);
        }
      }
    }

    return res;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Minimum time taken by each job to be completed given by a directed acyclic graph <span class="tag"><span class="graph">graph</span></span> {#minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph}

<https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/>

Simply implement Kahn's algorithm with a `jobs` array adding 1 to each layer of
the topo traversal


## <span class="org-todo todo TODO">TODO</span> Find whether it is possible to finish all tasks from given dependencies <span class="tag"><span class="graph">graph</span></span> {#find-whether-it-is-possible-to-finish-all-tasks-from-given-dependencies}

<https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/>


## <span class="org-todo todo TODO">TODO</span> Find the number of islands <span class="tag"><span class="graph">graph</span></span> {#find-the-number-of-islands}

<https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1>


## <span class="org-todo todo TODO">TODO</span> Given a sorted dictionary of an alien language, find order of characters <span class="tag"><span class="graph">graph</span></span> {#given-a-sorted-dictionary-of-an-alien-language-find-order-of-characters}

<https://practice.geeksforgeeks.org/problems/alien-dictionary/1>


## <span class="org-todo todo TODO">TODO</span> Implement Kruskal's algorithm <span class="tag"><span class="graph">graph</span></span> {#implement-kruksal-s-algorithm}

<https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/>


## <span class="org-todo todo TODO">TODO</span> Implement Prim's algorithm <span class="tag"><span class="graph">graph</span></span> {#implement-prim-s-algorithm}

<https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/>


## <span class="org-todo todo TODO">TODO</span> Total number of spanning tree in a graph <span class="tag"><span class="graph">graph</span></span> {#total-number-of-spanning-tree-in-a-graph}

<https://www.geeksforgeeks.org/total-number-spanning-trees-graph/>


## <span class="org-todo todo TODO">TODO</span> Implement Bellman Ford algorithm <span class="tag"><span class="graph">graph</span></span> {#implement-bellman-ford-algorithm}

<https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0>


## <span class="org-todo todo TODO">TODO</span> Implement Floyd Warshall algorithm <span class="tag"><span class="graph">graph</span></span> {#implement-floyd-warshall-algorithm}

<https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0>


## <span class="org-todo todo TODO">TODO</span> Travelling salesman <span class="tag"><span class="graph">graph</span></span> {#travelling-salesman}

<https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/>


## <span class="org-todo todo TODO">TODO</span> Graph colouring <span class="tag"><span class="graph">graph</span></span> {#graph-colouring}

<https://www.geeksforgeeks.org/graph-coloring-applications/>


## <span class="org-todo todo TODO">TODO</span> Snake and ladders <span class="tag"><span class="graph">graph</span></span> {#snake-and-ladders}

<https://leetcode.com/problems/snakes-and-ladders/>


## <span class="org-todo todo TODO">TODO</span> Find bridge in a graph <span class="tag"><span class="graph">graph</span></span> {#find-bridge-in-a-graph}

<https://www.geeksforgeeks.org/bridge-in-a-graph/>


## <span class="org-todo todo TODO">TODO</span> Count strongly connected components (Kosaraju algorithm) <span class="tag"><span class="graph">graph</span></span> {#count-strongly-connected-components--kosaraju-algorithm}

<https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1>


## <span class="org-todo todo TODO">TODO</span> Check if graph is bipartite <span class="tag"><span class="graph">graph</span></span> {#check-if-graph-is-bipartite}

<https://www.geeksforgeeks.org/bipartite-graph/>

Color the graph by BFS traversal, `colors` maintains track of visited nodes.

`colors[it] = 1 - colors[node]` is the fun alternator part


### Using BFS {#using-bfs}

```cpp
class Solution {
  bool bfsHelper(int i, vector<int> &colors, vector<int> adj[]) {
    queue<int> q;
    colors[i] = 1;
    q.push(i);

    while (!q.empty()) {
      int node = q.front();
      q.pop();

      for (int it : adj[node]) {
        if (colors[it] == -1) {
          colors[it] = 1 - colors[node];
          q.push(it);
        } else if (colors[it] == colors[node]) {
          return false;
        }
      }
    }
    return true;
  }

public:
  bool isBipartite(int V, vector<int> adj[]) {
    vector<int> colors(V, -1);

    for (int i = 0; i < V; i++) {
      if (colors[i] == -1) {
        if (!bfsHelper(i, colors, adj))
          return false;
      }
    }
    return true;
  }
};
```


### Using DFS {#using-dfs}

```cpp
class Solution {
  bool dfsHelper(int i, vector<int> &colors, vector<int> adj[]) {
    if (colors[i] == -1) {
      colors[i] = 1;
    }

    for (int it : adj[i]) {
      if (colors[it] == -1) {
        colors[it] = 1 - colors[i];

        if (!dfsHelper(it, colors, adj)) {
          return false;
        }
      } else if (colors[it] == colors[i]) {
        return false;
      }
    }
    return true;
  }

public:
  bool isBipartite(int V, vector<int> adj[]) {
    vector<int> colors(V, -1);

    for (int i = 0; i < V; i++) {
      if (colors[i] == -1) {
        if (!dfsHelper(i, colors, adj))
          return false;
      }
    }
    return true;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Detect negative cycle in a graph <span class="tag"><span class="graph">graph</span></span> {#detect-negative-cycle-in-a-graph}

<https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/>


## <span class="org-todo todo TODO">TODO</span> Longest path in a directed acyclic graph <span class="tag"><span class="graph">graph</span></span> {#longest-path-in-a-directed-acyclic-graph}

<https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/>


## <span class="org-todo todo TODO">TODO</span> Journey to the moon <span class="tag"><span class="graph">graph</span></span> {#journey-to-the-moon}

<https://www.hackerrank.com/challenges/journey-to-the-moon/problem>


## <span class="org-todo todo TODO">TODO</span> Cheapest flights within K stops <span class="tag"><span class="graph">graph</span></span> {#cheapest-flights-within-k-stops}

<https://leetcode.com/problems/cheapest-flights-within-k-stops/description/>


## <span class="org-todo todo TODO">TODO</span> Oliver and the game <span class="tag"><span class="graph">graph</span></span> {#oliver-and-the-game}

<https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/>


## <span class="org-todo todo TODO">TODO</span> Water jug using BFS <span class="tag"><span class="graph">graph</span></span> {#water-jug-using-bfs}

<https://www.geeksforgeeks.org/water-jug-problem-using-bfs/>


## <span class="org-todo todo TODO">TODO</span> Minimum edges to reverse to make path from source to destination <span class="tag"><span class="graph">graph</span></span> {#minimum-edges-to-reverse-to-make-path-from-source-to-destination}

<https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/>


## <span class="org-todo todo TODO">TODO</span> Paths to travel each nodes using each edge <span class="tag"><span class="graph">graph</span></span> {#paths-to-travel-each-nodes-using-each-edge}

<https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/>


## <span class="org-todo todo TODO">TODO</span> Vertex cover <span class="tag"><span class="graph">graph</span></span> {#vertex-cover}

<https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/>


## <span class="org-todo todo TODO">TODO</span> Chinese postman or route inspection <span class="tag"><span class="graph">graph</span></span> {#chinese-postman-or-route-inspection}

<https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/>


## <span class="org-todo todo TODO">TODO</span> Number of triangles in a directed and undirected graph <span class="tag"><span class="graph">graph</span></span> {#number-of-triangles-in-a-directed-and-undirected-graph}

<https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/>


## <span class="org-todo todo TODO">TODO</span> Minimise the cashflow in a set of friends <span class="tag"><span class="graph">graph</span><span class="greedy">greedy</span></span> {#minimise-the-cashflow-in-a-set-of-friends}

<https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/>


## <span class="org-todo todo TODO">TODO</span> Two clique <span class="tag"><span class="graph">graph</span></span> {#two-clique}

<https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/>


## <span class="org-todo todo TODO">TODO</span> Construct a trie from scratch <span class="tag"><span class="trie">trie</span></span> {#construct-a-trie-from-scratch}

<https://www.geeksforgeeks.org/trie-insert-and-search/>


## <span class="org-todo todo TODO">TODO</span> Find shortest unique prefix for every word in a given list <span class="tag"><span class="trie">trie</span></span> {#find-shortest-unique-prefix-for-every-word-in-a-given-list}

<https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/>


## <span class="org-todo todo TODO">TODO</span> Implement a phone directory <span class="tag"><span class="trie">trie</span></span> {#implement-a-phone-directory}

<https://practice.geeksforgeeks.org/problems/phone-directory/0>


## <span class="org-todo todo TODO">TODO</span> Print unique rows in a given boolean matrix <span class="tag"><span class="trie">trie</span></span> {#print-unique-rows-in-a-given-boolean-matrix}

<https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1>


## <span class="org-todo todo TODO">TODO</span> Coin change <span class="tag"><span class="dp">dp</span></span> {#coin-change}

<https://practice.geeksforgeeks.org/problems/coin-change2448/1>

```cpp
class Solution {
  long long dp[1005][1005];

public:
  long long int count(int S[], int m, int n) {
    memset(dp, -1, sizeof(dp));

    for (int i = 0; i <= m; i++) {
      dp[i][0] = 1;
    }

    for (int j = 1; j <= n; j++) {
      dp[0][j] = 0;
    }

    for (int i = 1; i <= m; i++) {
      for (int j = 1; j <= n; j++) {
        if (S[i - 1] <= j) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - S[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[m][n];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Knapsack <span class="tag"><span class="dp">dp</span></span> {#knapsack}

<https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0>

Iterative

```cpp
class Solution {
  int dp[1005][1005];

public:
  int knapSack(int W, int wt[], int val[], int n) {
    memset(dp, -1, sizeof(dp));

    for (int i = 0; i <= n; i++) {
      for (int w = 0; w <= W; w++) {
        if (i == 0 || w == 0)
          dp[i][w] = 0;
        else if (wt[i - 1] <= w)
          dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
        else
          dp[i][w] = dp[i - 1][w];
      }
    }
    return dp[n][W];
  }
};
```

Recursion

```cpp

```


## <span class="org-todo todo TODO">TODO</span> Binomial coefficient <span class="tag"><span class="dp">dp</span></span> {#binomial-coefficient}

<https://practice.geeksforgeeks.org/problems/ncr1019/1>


## <span class="org-todo todo TODO">TODO</span> Permutation coefficient <span class="tag"><span class="dp">dp</span></span> {#permutation-coefficient}

<https://www.geeksforgeeks.org/permutation-coefficient/>


## <span class="org-todo todo TODO">TODO</span> Nth catalan number <span class="tag"><span class="dp">dp</span></span> {#nth-catalan-number}

<https://www.geeksforgeeks.org/program-nth-catalan-number/>


## <span class="org-todo todo TODO">TODO</span> Matrix chain multiplication <span class="tag"><span class="dp">dp</span></span> {#matrix-chain-multiplication}

<https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/>


## <span class="org-todo todo TODO">TODO</span> Subset sum aka Partitions <span class="tag"><span class="dp">dp</span><span class="backtracking">backtracking</span></span> {#subset-sum-aka-partitions}

<https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1>


## <span class="org-todo todo TODO">TODO</span> Friends pairing <span class="tag"><span class="dp">dp</span></span> {#friends-pairing}

<https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1>


## <span class="org-todo todo TODO">TODO</span> Gold mine <span class="tag"><span class="dp">dp</span></span> {#gold-mine}

<https://www.geeksforgeeks.org/gold-mine-problem/>


## <span class="org-todo todo TODO">TODO</span> Assembly line scheduling <span class="tag"><span class="dp">dp</span></span> {#assembly-line-scheduling}

<https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/>


## <span class="org-todo todo TODO">TODO</span> Painting the fence <span class="tag"><span class="dp">dp</span></span> {#painting-the-fence}

<https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1>

```cpp
class Solution {
  long long dp[100005];

public:
  long long countWays(int n, int k) {
    memset(dp, 0, sizeof(dp));
    long long mod = 1000000007;

    dp[1] = k;
    dp[2] = k * k;

    for (int i = 3; i <= n; i++) {
      dp[i] = ((k - 1) * (dp[i - 1] + dp[i - 2])) % mod;
    }

    return dp[n];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Maximize the cut segments <span class="tag"><span class="dp">dp</span></span> {#maximize-the-cut-segments}

<https://practice.geeksforgeeks.org/problems/cutted-segments/0>

```cpp
class Solution {
  int dp[10005];
  int solve(int x, int a, int b, int c) {
    if (dp[x] != -1)
      return dp[x];
    if (x < min({a, b, c}))
      return dp[x] = INT_MIN;
    int n1 = (x >= a) ? solve(x - a, a, b, c) + 1 : INT_MIN;
    int n2 = (x >= b) ? solve(x - b, a, b, c) + 1 : INT_MIN;
    int n3 = (x >= c) ? solve(x - c, a, b, c) + 1 : INT_MIN;
    dp[x] = max({n1, n2, n3});
    return dp[x];
  }

public:
  int maximizeTheCuts(int n, int x, int y, int z) {
    memset(dp, -1, sizeof(dp));

    dp[0] = 0;
    solve(n, x, y, z);
    return max(0, dp[n]);
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Longest common subsequence <span class="tag"><span class="string">string</span><span class="dp">dp</span></span> {#longest-common-subsequence}

<https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0>

Iterative

```cpp
class Solution {
  int dp[1005][1005];

public:
  int lcs(int x, int y, string s1, string s2) {
    for (int i = 0; i <= x; i++) {
      for (int j = 0; j <= y; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (s1[i - 1] == s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[x][y];
  }
};
```

Recursive

```cpp
class Solution {
  int dp[1005][1005];

public:
  int solve(int x, int y, string s, string s2) {
    if (x == 0 || y == 0) {
      return dp[x][y] = 0;
    } else if (dp[x][y] != -1) {
      return dp[x][y];
    } else {
      if (s1[x - 1] == s2[y - 1]) {
        return 1 + lcs(x - 1, y - 1, s1, s2);
      } else {
        return max(lcs(x - 1, y, s1, s2), lcs(x, y - 1, s1, s2));
      }
    }
  }
  int lcs(int x, int y, string s1, string s2) {
    memset(dp, -1, sizeof(dp));

    return dp[x][y];
  }
}
```


## <span class="org-todo todo TODO">TODO</span> Longest repeated subsequence <span class="tag"><span class="string">string</span><span class="dp">dp</span></span> {#longest-repeated-subsequence}

<https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0>

```cpp
class Solution {
  int dp[505][505];

public:
  int LongestRepeatingSubsequence(string str) {
    int n = str.size();

    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= n; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (str[i - 1] == str[j - 1] && i != j) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[n][n];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Longest increasing subsequence <span class="tag"><span class="dp">dp</span></span> {#longest-increasing-subsequence}

<https://leetcode.com/problems/longest-increasing-subsequence/>

```cpp
class Solution {
public:
  int lengthOfLIS(vector<int> &nums) {
    int n = nums.size();
    vector<int> dp(n, 1);
    for (int i = 0; i < n; ++i)
      for (int j = 0; j < i; ++j)
        if (nums[i] > nums[j] && dp[i] < dp[j] + 1)
          dp[i] = dp[j] + 1;
    return *max_element(dp.begin(), dp.end());
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Space optimized solution of LCS <span class="tag"><span class="dp">dp</span></span> {#space-optimized-solution-of-lcs}

<https://www.geeksforgeeks.org/space-optimized-solution-lcs/>


## <span class="org-todo todo TODO">TODO</span> LCS of three strings <span class="tag"><span class="dp">dp</span></span> {#lcs-of-three-strings}

<https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0>


## <span class="org-todo todo TODO">TODO</span> Maximum sum increasing subsequence <span class="tag"><span class="dp">dp</span></span> {#maximum-sum-increasing-subsequence}

<https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1>


## <span class="org-todo todo TODO">TODO</span> Count all subsequences having product less than K <span class="tag"><span class="dp">dp</span></span> {#count-all-subsequences-having-product-less-than-k}

<https://www.geeksforgeeks.org/count-subsequences-product-less-k/>


## <span class="org-todo todo TODO">TODO</span> Longest subsequence such that difference between adjacent is one <span class="tag"><span class="dp">dp</span></span> {#longest-subsequence-such-that-difference-between-adjacent-is-one}

<https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1>


## <span class="org-todo todo TODO">TODO</span> Maximum subsequence sum such that no three are consecutive <span class="tag"><span class="dp">dp</span></span> {#maximum-subsequence-sum-such-that-no-three-are-consecutive}

<https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/>


## <span class="org-todo todo TODO">TODO</span> Egg dropping <span class="tag"><span class="dp">dp</span></span> {#egg-dropping}

<https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0>


## <span class="org-todo todo TODO">TODO</span> Maximum length chain of pairs <span class="tag"><span class="dp">dp</span></span> {#maximum-length-chain-of-pairs}

<https://practice.geeksforgeeks.org/problems/max-length-chain/1>


## <span class="org-todo todo TODO">TODO</span> Maximum size square sub-matrix with all 1s <span class="tag"><span class="dp">dp</span></span> {#maximum-size-square-sub-matrix-with-all-1s}

<https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0>


## <span class="org-todo todo TODO">TODO</span> Maximum sum of pairs with specific difference <span class="tag"><span class="dp">dp</span></span> {#maximum-sum-of-pairs-with-specific-difference}

<https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0>


## <span class="org-todo todo TODO">TODO</span> Min cost path <span class="tag"><span class="dp">dp</span></span> {#min-cost-path}

<https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1>


## <span class="org-todo todo TODO">TODO</span> Maximum difference of zeros and ones in binary string <span class="tag"><span class="dp">dp</span></span> {#maximum-difference-of-zeros-and-ones-in-binary-string}

<https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1>


## <span class="org-todo todo TODO">TODO</span> Minimum cost to fill given weight in a bag <span class="tag"><span class="dp">dp</span></span> {#minimum-cost-to-fill-given-weight-in-a-bag}

<https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1>


## <span class="org-todo todo TODO">TODO</span> Minimum removals from array to make max - min &lt;= K <span class="tag"><span class="dp">dp</span></span> {#minimum-removals-from-array-to-make-max-min-k}

<https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/>


## <span class="org-todo todo TODO">TODO</span> Longest common substring <span class="tag"><span class="dp">dp</span></span> {#longest-common-substring}

<https://practice.geeksforgeeks.org/problems/longest-common-substring/0>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int longestCommonSubstr(string s1, string s2, int n, int m) {
    int ans = 0;
    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= m; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (s1[i - 1] == s2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
          ans = max(ans, dp[i][j]);
        } else {
          dp[i][j] = 0;
        }
      }
    }

    return ans;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Count number of ways to reach a given score in a game <span class="tag"><span class="dp">dp</span></span> {#count-number-of-ways-to-reach-a-given-score-in-a-game}

<https://practice.geeksforgeeks.org/problems/reach-a-given-score/0>


## <span class="org-todo todo TODO">TODO</span> Count balanced binary trees of height h <span class="tag"><span class="dp">dp</span></span> {#count-balanced-binary-trees-of-height-h}

<https://practice.geeksforgeeks.org/problems/bbt-counter/0>


## <span class="org-todo todo TODO">TODO</span> Smallest sum contiguous subarray <span class="tag"><span class="dp">dp</span></span> {#smallest-sum-contiguous-subarray}

<https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/>


## <span class="org-todo todo TODO">TODO</span> Unbounded knapsack <span class="tag"><span class="dp">dp</span></span> {#unbounded-knapsack}

<https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1>

```cpp
class Solution {
  int dp[1005][1005];

public:
  int knapSack(int N, int W, int val[], int wt[]) {
    memset(dp, -1, sizeof(dp));

    for (int i = 0; i <= N; i++) {
      for (int j = 0; j <= W; j++) {
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
        } else if (wt[i - 1] <= j) {
          dp[i][j] = max(dp[i - 1][j], val[i - 1] + dp[i][j - wt[i - 1]]);
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[N][W];
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Largest independent set <span class="tag"><span class="dp">dp</span></span> {#largest-independent-set}

<https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/>


## <span class="org-todo todo TODO">TODO</span> Longest palindromic subsequence <span class="tag"><span class="dp">dp</span></span> {#longest-palindromic-subsequence}

<https://leetcode.com/problems/longest-palindromic-subsequence/>

```cpp
class Solution {
    int dp[1005][1005];
public:
    int longestPalindromeSubseq(string s) {
        string rev = string(s.rbegin(), s.rend());

        int n = s.size();

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                } else if (s[i - 1] == rev[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[n][n];
    }
};
```


## <span class="org-todo todo TODO">TODO</span> Longest palindromic substring <span class="tag"><span class="dp">dp</span></span> {#longest-palindromic-substring}

<https://leetcode.com/problems/longest-palindromic-substring/>


## <span class="org-todo todo TODO">TODO</span> Longest alternating subsequence <span class="tag"><span class="dp">dp</span></span> {#longest-alternating-subsequence}

<https://practice.geeksforgeeks.org/problems/longest-alternating-subsequence/0>


## <span class="org-todo todo TODO">TODO</span> Weighted job scheduling <span class="tag"><span class="dp">dp</span></span> {#weighted-job-scheduling}

<https://www.geeksforgeeks.org/weighted-job-scheduling/>


## <span class="org-todo todo TODO">TODO</span> Coin game winner where every player has three choices <span class="tag"><span class="dp">dp</span></span> {#coin-game-winner-where-every-player-has-three-choices}

<https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/>


## <span class="org-todo todo TODO">TODO</span> Count derangements <span class="tag"><span class="dp">dp</span></span> {#count-derangements}

<https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/>


## <span class="org-todo todo TODO">TODO</span> Optimal strategy for a game <span class="tag"><span class="dp">dp</span></span> {#optimal-strategy-for-a-game}

<https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0>


## <span class="org-todo todo TODO">TODO</span> Optimal binary search tree <span class="tag"><span class="dp">dp</span></span> {#optimal-binary-search-tree}

<https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/>


## <span class="org-todo todo TODO">TODO</span> Palindrome partitioning <span class="tag"><span class="dp">dp</span></span> {#palindrome-partitioning}

<https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1>


## <span class="org-todo todo TODO">TODO</span> Mobile numeric keypad <span class="tag"><span class="dp">dp</span></span> {#mobile-numeric-keypad}

<https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1>


## <span class="org-todo todo TODO">TODO</span> Boolean parenthesization <span class="tag"><span class="dp">dp</span></span> {#boolean-parenthesization}

<https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0>


## <span class="org-todo todo TODO">TODO</span> Largest rectangular sub-matrix whose sum is 0 <span class="tag"><span class="dp">dp</span></span> {#largest-rectangular-sub-matrix-whose-sum-is-0}

<https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/>


## <span class="org-todo todo TODO">TODO</span> Largest area rectangular sub-matrix with equal number of 1s and 0s <span class="tag"><span class="dp">dp</span></span> {#largest-area-rectangular-sub-matrix-with-equal-number-of-1s-and-0s}

<https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/>


## <span class="org-todo todo TODO">TODO</span> Maximum sum rectangle in a 2D matrix <span class="tag"><span class="dp">dp</span></span> {#maximum-sum-rectangle-in-a-2d-matrix}

<https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0>


## <span class="org-todo todo TODO">TODO</span> Maximum profit by buying and selling a share at most K times <span class="tag"><span class="dp">dp</span></span> {#maximum-profit-by-buying-and-selling-a-share-at-most-k-times}

<https://practice.geeksforgeeks.org/problems/maximum-profit4657/1>


## <span class="org-todo todo TODO">TODO</span> Find if a string is interleaved of two other strings <span class="tag"><span class="dp">dp</span></span> {#find-if-a-string-is-interleaved-of-two-other-strings}

<https://practice.geeksforgeeks.org/problems/interleaved-strings/1>


## <span class="org-todo todo TODO">TODO</span> Maximum length of pair chain <span class="tag"><span class="dp">dp</span></span> {#maximum-length-of-pair-chain}

<https://leetcode.com/problems/maximum-length-of-pair-chain/>


## <span class="org-todo todo TODO">TODO</span> Count set bits in an integer <span class="tag"><span class="bit">bit</span></span> {#count-set-bits-in-an-integer}

<https://practice.geeksforgeeks.org/problems/set-bits0143/1>

```cpp
class Solution {
public:
  int setBits(int N) {
    int bCount = 0;
    while (N) {
      N &= (N - 1);
      bCount++;
    }

    return bCount;
  }
};
```


## <span class="org-todo todo TODO">TODO</span> Find the two non-repeating elements in an array of repeating elements <span class="tag"><span class="bit">bit</span></span> {#find-the-two-non-repeating-elements-in-an-array-of-repeating-elements}

<https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1>


## <span class="org-todo todo TODO">TODO</span> Count number of bits to be flipped to convert A to B <span class="tag"><span class="bit">bit</span></span> {#count-number-of-bits-to-be-flipped-to-convert-a-to-b}

<https://practice.geeksforgeeks.org/problems/bit-difference/0>


## <span class="org-todo todo TODO">TODO</span> Count total set bits in all numbers from 1 to N <span class="tag"><span class="bit">bit</span></span> {#count-total-set-bits-in-all-numbers-from-1-to-n}

<https://practice.geeksforgeeks.org/problems/count-total-set-bits/0>


## <span class="org-todo todo TODO">TODO</span> Check if a number is a power of 2 <span class="tag"><span class="bit">bit</span></span> {#check-if-a-number-is-a-power-of-2}

<https://practice.geeksforgeeks.org/problems/power-of-2/0>


## <span class="org-todo todo TODO">TODO</span> Find position of the only set bit <span class="tag"><span class="bit">bit</span></span> {#find-position-of-the-only-set-bit}

<https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1>


## <span class="org-todo todo TODO">TODO</span> Copy set bits in a range <span class="tag"><span class="bit">bit</span></span> {#copy-set-bits-in-a-range}

<https://www.geeksforgeeks.org/copy-set-bits-in-a-range/>


## <span class="org-todo todo TODO">TODO</span> Divide two integers without using multiplication, division or mod operator <span class="tag"><span class="bit">bit</span></span> {#divide-two-integers-without-using-multiplication-division-or-mod-operator}

<https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/>


## <span class="org-todo todo TODO">TODO</span> Calculate square of a number without using \*, / and pow() <span class="tag"><span class="bit">bit</span></span> {#calculate-square-of-a-number-without-using-and-pow}

<https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/>


## <span class="org-todo todo TODO">TODO</span> Power set <span class="tag"><span class="bit">bit</span></span> {#power-set}

<https://practice.geeksforgeeks.org/problems/power-set4302/1>
