const mergeSortedArray = (nums1, m, nums2, n) => {
  let mpointer = m - 1;
  let npointer = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    const n1 = nums1[mpointer];
    const n2 = nums2[npointer];
    if (n1 >= n2 && mpointer >= 0) {
      nums1[i] = n1;
      mpointer--;
    } else if (npointer >= 0) {
      nums1[i] = n2;
      npointer--;
    }
  }
  return nums1;
};

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

console.log(mergeSortedArray([0], 0, [1], 1));

console.log(mergeSortedArray([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));

console.log(mergeSortedArray([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2));
