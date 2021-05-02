
var roll;
var rollPlus;
var rolls=[];
var rollsPlus=[];
var i;


function miscDice(noSides, noDice, plus)
            {
                rolls = [];
                rollsPlus=[];
                for (i=0; i<noDice;i++) {
                roll = ((Math.random() * noSides) + 1);
                rolls.push(roll);
                rollPlus = roll + plus;
                rollsPlus.push(rollPlus);
            }
            }