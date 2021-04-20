var roll;
var rollPlus;
var rolls=[];
var rollsPlus=[];
var i;

function d4(noDice, plus)
{
  rolls=[];
  rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * 4) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}

function d6(noDice, plus)
{
   rolls=[];
   rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * 6) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}

function d8(noDice, plus)
{
    rolls=[];
    rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * 8) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}

function d10(noDice, plus)
{
    rolls=[];
    rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * 10) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}

function d12(noDice, plus)
{
    rolls=[];
    rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * 12) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}

function d20(noDice, plus)
{
    rolls=[];
    rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * 20) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}

function miscDice(noSides, noDice, plus)
{
    rolls=[];
    rollsPlus=[];
    for (i=0; i<noDice;i++) {
        roll = ((Math.random() * noSides) + 1);
        rolls.push(roll);
        rollPlus = roll + plus;
        rollsPlus.push(rollPlus);
    }
}