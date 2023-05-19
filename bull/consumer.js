const {_processors} = require('./processors');
const { sampleQueue } = require("./configuration");


// Jobs Consumers
for (let identity in _processors) {
    sampleQueue.process(identity, 1, _processors[identity]);  // queue_name.process(function_name, concurrency, function_execute)
};