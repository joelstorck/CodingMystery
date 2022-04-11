const fs = require('fs');

const particle = "\u2022";
var originY = 26;
var originX = 51;
var totalSum = 0;

var particleFromText = fs.readFileSync('particleGrid.txt').toString();
var arrayGrid = particleFromText.split('\r\n');

arrayGrid.forEach(searchParticle);
console.log('Total Manhattan Distance:');
console.log(totalSum);

function searchParticle(value, index) {

    for (let i = 0; i < value.length; i++) {
        if(value[i] === particle) {
        console.log(value[i]+" Y="+index+"X="+i);
        addSum(index, i);
        }
    }  
}

function addSum(Y, X) {
    var calcY = Math.abs(originY-Y);
    var calcX = Math.abs(originX-X);
    
    var manhattanDistance = calcY+calcX;
    totalSum = totalSum+manhattanDistance;    
}