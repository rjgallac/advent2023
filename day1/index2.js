const fs = require("node:fs");
fs.readFile("inputnext.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //   let arr = data.split("\n");
  //   let sum = total(arr);
  //   console.log(sum);
});

fs.readFile("inputnext2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let arr = data.split("\n");
  let sum = total(arr);
  console.log(sum);
});

// console.log(total(["qllvxktqzkmchqthreektnpbtjnd6lfsthvrnq"])); //36
// console.log(total(["fivethreepxnxtgpgmrtwo1"])); //51
// console.log(total(["1mbkhbjbsmpc9three5"])); //51
// console.log(total(["eighthree"])); //83
// console.log(total(["sevenine"])); //79
// console.log(total(["xtwone3four"])); //24
// console.log(total(["nineeight"])); //98
// console.log(total(["nineight"])); //98
// console.log(total(["three2fiveonexrllxsvfive"])); //35
// console.log(total(["2twonemg"])); //21
// console.log(total(["two1two"])); //22
// console.log(total(["eightwothree"])); //83
// console.log(total(["zoneight234"])); //14
// console.log(total(["oneight"])); //18
// console.log(total(["one2one"])); //11
// console.log(total(["five67five"])); //55
// console.log(total(["6ctdtqxnfxqpn"])); //55

function total(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let first = findFirstNum(arr[i].split(""));
    console.log(first);
    let firstword = findFirstWordNumber(arr[i]);
    // console.log(firstword);
    // console.log(first);
    let actualfirst;
    if (first == "" || firstword.least <= first.indexat) {
      //   console.log(firstword.leastnumber);
      actualfirst = firstword.leastnumber;
    } else {
      //   console.log(first.indexnum);
      actualfirst = first.indexnum;
    }
    // console.log(firstword.leastnumber);
    let actuallast;
    rev = arr[i].split("").reverse();
    let last = findFirstNum(rev);
    let lastrev = rev.length - last.indexat - 1;
    console.log(lastrev);
    let lastword = findLastWordNumber(arr[i]);
    // console.log(lastword);
    console.log(last);
    if (last == "" || lastword.mostindex > rev.length - last.indexat) {
      actuallast = lastword.mostnumber;
    } else {
      actuallast = last.indexnum;
    }
    sum += parseInt(actualfirst + "" + actuallast);
    console.log(parseInt(actualfirst + "" + actuallast));
  }
  return sum;
}

function findFirstWordNumber(chars) {
  let nums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  least = 99;
  leastword = "";
  let leastnumber = 99;
  for (let i = 0; i < nums.length; i++) {
    let wordindex = chars.indexOf(nums[i]);
    if (wordindex != -1 && wordindex < least) {
      least = wordindex;
      leastword = nums[i];
      leastnumber = i + 1;
    }
  }
  //   console.log(leastword);
  //   console.log(least);
  return {
    leastword: leastword,
    least: least,
    leastnumber,
  };
}

function findLastWordNumber(chars) {
  let nums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  mostindex = 0;
  mostword = "";
  let mostnumber = 0;
  for (let i = 0; i < nums.length; i++) {
    let wordindex = chars.lastIndexOf(nums[i]);
    if (wordindex != -1 && wordindex > mostindex) {
      mostindex = wordindex;
      mostword = nums[i];
      mostnumber = i + 1;
    }
  }
  //   console.log(mostword);
  //   console.log(most);
  return {
    mostword: mostword,
    mostindex: mostindex + 1,
    mostnumber: mostnumber,
  };
}

function findFirstNum(chars) {
  for (j = 0; j < chars.length; j++) {
    // console.log(chars[j]);
    if (chars[j] >= "0" && chars[j] <= "9") {
      //   console.log(chars[j]);
      return {
        indexat: j,
        indexnum: chars[j],
      };
    }
  }
  return "";
}

console.log("Hello CodeSandbox1");
