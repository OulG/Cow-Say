const student = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${student.myName} from ${student.myCampus}`,
    e : "oO",
    T : "U "
}));