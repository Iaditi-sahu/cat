let input = process.argv.slice(2);
var fs = require('fs');
const bigLineBreaks = require('./commands/bigLineBreaks');
const defaultShowData = require('./commands/defaultShowData');
const giveNumber = require('./commands/giveNumber');
const nonEmptyNumber = require('./commands/nonEmptyNumber');
let val = 0;
let option = input[0]
let showContent = require('./commands/showContent')
if(option == '-s' || option == '-n' || option == '-b'){
    let dirpath = input[1]
    if(input.length <= 2) {
        switch(option) {
            case '-s':
                lineBreak(dirpath);
                break;
            case '-n':
                showData(dirpath);
                break;
            case '-b':
                nonEmptyNo(dirpath);
                break;
            default:
                console.log('out of range');
                break;
        }

    } else {
        if(input.length == 3 && input[0] == '-n' && input[1] == '-s') {
            let path = input[2]
            bigLineBreak(path)
            giveNumber(path)
        }
        else if(input.length == 3 && input[0] == '-n' && input[1] == '-b') {
            let path = input[2]
            giveNumber(path)
        }
        else if(input.length == 3 && input[0] == '-b' && input[1] == '-n') {
            let path = input[2]
            nonEmptyNo(path)
        }
        else{
            console.log('Out of range');
        }
    }

} else {
    defaultShowData(input);
}