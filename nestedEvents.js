//The callback fn can be named and passed as a variable

const events = require("events");
const eventEmitter = new events.EventEmitter();

var logLevel = (level) => {
  console.log(level);
};

var logMessage = (message) => {
  eventEmitter.emit("logLevel", "INFO");
  console.log(message);
};

eventEmitter.on("logMessage", logMessage);
eventEmitter.on("logLevel", logLevel);

eventEmitter.emit("logMessage", "Hello World!");
