const fs = require("node:fs");
fs.readFile("task2input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let sum = 0;
  arr = data.split("\n");
  for (i = 0; i < arr.length; i++) {
    sum += game(arr[i]);
  }
  console.log(sum)
});

function game(gameline){
    let gameno = (gameline.split(":")[0]).split(" ")[1];
    let sets = gameline.split(":")[1];
    let set = sets.split(";");
    let minred = 0;
    let minblue = 0;
    let mingreen = 0;
    for(let i=0; i < set.length; i++){
        let splitset = set[i].split(",")
        // console.log(splitset)
        for(let j = 0; j < splitset.length; j++) {
            // console.log(splitset[j])
            let num = parseInt(splitset[j].split(" ")[1]);
            let col = splitset[j].split(" ")[2];
            if(col === "red" && minred < num ) {
                minred = num;
            }
            if(col === "green" && mingreen < num) {
                mingreen = num;
            }
            if(col === "blue" && minblue < num) {
                minblue = num;
            }
            
        }
    }
    // console.log(minred)
    // console.log(minblue)
    // console.log(mingreen)
    let total = minred * mingreen * minblue;
    // console.log(total)
    return total;
}