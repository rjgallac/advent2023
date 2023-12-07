const fs = require("node:fs");
fs.readFile("input2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let sum = 0;
  arr = data.split("\n");
  for (i = 0; i < arr.length; i++) {
    let gameValid = game(arr[i], 12, 13, 14);
    console.log(gameValid)
    sum += parseInt(gameValid);
  }
  console.log(sum);

});

function game(gameline, red, green, blue){
    let gameno = (gameline.split(":")[0]).split(" ")[1];
    let sets = gameline.split(":")[1];
    let passestest = true;
    let set = sets.split(";");
    for(let i=0; i< set.length; i++){
        let splitset = set[i].split(",")
        // console.log(splitset)
        for(let j = 0; j < splitset.length; j++) {
            console.log(splitset[j])
            let num = splitset[j].split(" ")[1];
            let col = splitset[j].split(" ")[2];
            if((col == "blue" && num > blue) || (col == "green" && num > green) || (col == "red" && num > red)) {
                passestest = false;
            }

        }



    }
    return passestest ? gameno : 0;
}