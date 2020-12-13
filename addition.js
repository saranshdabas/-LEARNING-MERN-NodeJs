//A was to export a function/variable using module

function add() {
  console.log("This is an addition fn");
}

var justAVariable = 22;

module.exports.addition = add;
module.exports.justAVariable = justAVariable;
