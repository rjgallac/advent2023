const fs = require("node:fs");
fs.readFile("input1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  arr = data.split("\n");
  let board = new Array()
  for (i = 0; i < arr.length; i++) {
    board.push(arr[i].split(""));
  }
  console.table(board)
  numGroups = new Array();
  for(let i=0;i<board.length;i++) {
    let numRegex = new RegExp('[0-9]+', "g");
    // console.log([...board[i].join("").matchAll(numRegex)])
    numGroups.push([...board[i].join("").matchAll(numRegex)])
  }
  console.log(board[1][3])


  let width = board.length;
  let height = board[0].length;

  let sum = 0;
  // let testgroup = numGroups[0][0];
  for(let j=0;j<numGroups.length;j++){
    for(let l=0;l<numGroups.length;l++){
      if(numGroups[j][l] !== undefined) {
        sum += checkSymbol(numGroups[j][l], j, board, width, height)
      }
    }
  }
  console.log(sum)
});

function checkSymbol(regexMatched, row, board, width, height){
  console.log(regexMatched)
  let startx = regexMatched.index
  // console.log(startx)
  let endx = startx + regexMatched[0].length - 1;
  // console.log(endx);
  let foundSymbol = false;
  for(let i=startx-1;i <= endx+1; i++) {

    console.log("checking" + i + row)
    if(checkInBounds(row, width, height) && checkAllSymbols(board[row][i]) ) {
      foundSymbol = true;
    }
    if(checkInBounds(row-1, width, height) && checkAllSymbols(board[row-1][i])) {
      foundSymbol = true;
    }
    if(checkInBounds(row+1, width, height) && checkAllSymbols(board[row+1][i])) {
      foundSymbol = true;
    }
  }
  console.log(foundSymbol)
  return foundSymbol ? parseInt(regexMatched[0], 10) : 0;

}

function checkAllSymbols(cell) {
  let allSymbols = ["*", "%", "#", "+", "$", "/", "=", "&", "@", "-"]
  if(allSymbols.includes(cell)) {
    return true;
  } 
  return false;
}

function checkInBounds(num, width, height) {
  if(num >0 && num < width) {
    return true
  }
  return false;
}