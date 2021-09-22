const net = require("net");
const client = require("./client");
client.connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003'){

      process.exit(0);
    }
  });

  return stdin;

}

setupInput();




// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)