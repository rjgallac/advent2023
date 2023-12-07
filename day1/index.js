const fs = require("node:fs");
fs.readFile("input2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  arr = data.split("\n");
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let first = findFirstNum(arr[i]).split("");
    rev = arr[i].split("").reverse();
    let last = findFirstNum(rev);
    sum = sum + parseInt(first + last);
    console.log(first + last);
  }
  console.log(sum);
});

function findFirstNum(chars) {
  for (j = 0; j < chars.length; j++) {
    // console.log(chars[j]);
    if (chars[j] >= "0" && chars[j] <= "9") {
      //   console.log(chars[j]);
      return chars[j];
    }
  }
  return "";
}

console.log("Hello CodeSandbox1");
