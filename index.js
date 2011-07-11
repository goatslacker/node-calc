/*global process */

const calc = function (arithmetic) {
  var result = "NaN";
  try {
    result = eval(arithmetic.replace(/[^0-9\+\*\-\/\(\)]/g, ""));
  } catch (e) { }
  return result || "NaN";
};

const stdout = function (std) {
  var result = calc(std);
  console.log(result);
};

const repl = function (callback) {
  var stdin = process.openStdin();

  stdin.setEncoding('utf8');
  process.stdout.write("calc> ");
  stdin.on('data', function (result) {
    callback(result);
    process.stdout.write("calc> ");
  });
};


var args = process.argv.slice(2);

if (args.length > 0) {
  stdout(args.join(""));
} else {
  repl(stdout);
}
