
// const EventEmitter = require("events");
// EventEmitter.defaultMaxListeners = 50;
const {_processors} = require('./processors');
const { sampleQueue } = require("./configuration");


// Jobs Consumers
for (let identity in _processors) {
    // queue_name.process(function_name, concurrency, function_execute)
    sampleQueue.process(identity, 1, _processors[identity])
};