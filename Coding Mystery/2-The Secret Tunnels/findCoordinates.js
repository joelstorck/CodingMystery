const fs = require('fs');
const wall = "\u2588";

var stepsFromText = fs.readFileSync('steps.txt').toString();
var mapFromText = fs.readFileSync('map.txt').toString();
var arrayMap = mapFromText.split('\r\n');

readSteps();

function readSteps() {
    var xCoordinate = 3;
    var yCoordinate = 21;
    console.log(arrayMap[xCoordinate].charAt(yCoordinate));  
        for (let index = 0; index < stepsFromText.length; index++) {
            var currentChar = stepsFromText[index]                        
            
            switch (currentChar) {
                case "N":                    
                    yCoordinate --;
                    if (checkWall(yCoordinate, xCoordinate) === true) {
                        yCoordinate ++;  
                    }
                    break;
                case "S":
                    yCoordinate ++;
                    if (checkWall(yCoordinate, xCoordinate) === true) {
                        yCoordinate --;  
                    }
                    break;
                case "E":
                    xCoordinate ++;
                    if (checkWall(yCoordinate, xCoordinate) === true) {
                        xCoordinate --;  
                    }
                    break;
                case "W":
                    xCoordinate --;
                    if (checkWall(yCoordinate, xCoordinate) === true) {
                        xCoordinate ++;  
                    }
                    break;
                default:
                    break;
            }         
        }
        console.log('FINAL DESTINATION:');
        console.log('X = '+xCoordinate);
        console.log('Y = '+yCoordinate);   
}

function checkWall(Y, X) {       
    if(arrayMap[Y].charAt(X) === wall) {
    
        return true;
    }
}