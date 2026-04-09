/**
 * say hi is afunction that takes a name and prints a greeting message to the console.
 * @param {*} name 
 */
function sayHi(name) {
    console.log(`Hi ${name}`);
}
/**
 * 
 * @param {*} name 
 * @returns String
 */
function sayHello(name) {
    return `Hello ${name}`;
}

module.exports.sayHello = sayHello;
module.exports = sayHi;
