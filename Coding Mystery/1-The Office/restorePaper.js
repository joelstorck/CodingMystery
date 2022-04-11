var fs = require('fs');
var eol = require('eol');

const logger = fs.createWriteStream('restoredpaper.txt', { flags: 'a' });
var shreddedText = fs.readFileSync('shredded.txt').toString();

createFile();
checkRows(shreddedText);

function createFile() {
    if (fs.existsSync('restoredpaper.txt')) {
        // path exists
        console.log("Fil finns redan");
        } else {
        fs.writeFile('restoredpaper.txt', "", function(err) {
            if(err) throw err;
            console.log("Fil skapad");
        });
    }
}

function checkRows(shreddedText) {
    var rounds = 1;
    var iCol = 3;
    const chars = ["T","I","M","E","-","C","O","R","P","\u2584","\u2588","\u2580"];   

    //läser rad för rad
    let lines = eol.split(shreddedText)
    while (rounds <=15) {
        for (let index = 0; index < chars.length; index++) {
            lines.forEach(function(line) {
                if (line.charAt(iCol)==chars[index] && line.charAt(iCol+1) != chars[index]) {
                    console.log('TRÄFF på column: '+iCol+' med bokstav: '+(chars[index]));
                    logger.write(`${line}+\n`);
                    console.log('Adderat text');                            
                }
            })
        }
    ++iCol;   
    ++rounds; 
    }        
}