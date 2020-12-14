//Events helps to execute code when something happens
//When we emit, we raise a signal
//This signal is detected by listener and apt action is taken

//Event Emitter is a class inside module events
const event = require("events");
const eventEmmiter = new event.EventEmitter();

//on is same as addListener which listens to signals
eventEmmiter.on("LogMessage", (message) => {
  console.log("Custom logger: " + message);
});

//Signalling that event happened
eventEmmiter.emit("LogMessage", "Hello World!");
