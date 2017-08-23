var basic = require("./basicCards.js");
var cloze = require("./clozeCard.js");

var warriors = new cloze("Golden State Warriors won the 2017 NBA championship.", 
"Warriors");
var warrior = new basic("What team won the 2017 NBA championship?", "warriors");

var answers = process.argv[2];

function basics(){
    for (var index = 0; index < basic.front.length; index++) {
        console.log(basic.front);
        if (answers == basic.back){
            console.log("Correct the answer was " + basic.back)
        }
        else {console.log("Wrong the answer is " + basic.back)}
    }
};
basics();