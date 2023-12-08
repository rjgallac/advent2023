const fs = require("node:fs");
fs.readFile("example.txt", "utf8", (err, data) => {
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
    for(let j=0;j < board[i].length;j++){
      if(board[i][j] === "*") {
        findNums(board, i, j)
      }
    }
  }
});

function findNums(board, row, col) {
  console.log(row, col)
  numGroups = new Array();

  let numRegex = new RegExp('[0-9]+', "g");
  numGroups.push([...board[row-1].join("").matchAll(numRegex)])
  numGroups.push([...board[row].join("").matchAll(numRegex)])
  numGroups.push([...board[row+1].join("").matchAll(numRegex)])

  console.log(numGroups)
  for(let x=0;x<numGroups.length;x++){
    for(let y=0;y<numGroups[x].length;y++) {
      console.log(numGroups[x][y])
      console.log(numGroups[x][y][0])
      start=numGroups[x][y].index
      end = start + numGroups[x][y][0].length - 1;
      console.log(start, end)
      // if(row = )
    }
  }
}
