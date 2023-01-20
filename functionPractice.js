function multiply(x, y) {
  return x * y;
}

let nums = multiply(3, 2);

console.log(nums);

function yell(word) {
  return word.toUpperCase();
}

let string = yell("ayyylmao");

console.log(string);

let nums1 = [2, 3, 4, 3, 2, 2];
let nums2 = [2, 34, 4, 21, , 4, 3, 2, 2, 4];

function check(x, y) {
  if (nums1.length > nums2.length) {
    return true;
  } else {
    return false;
  }
}

let thingy = check(nums1, nums2);

console.log(thingy);
