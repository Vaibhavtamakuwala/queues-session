const { sampleQueue } = require('./configuration');
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { ExpressAdapter } = require('@bull-board/express');

const createJobs = (jobName, objToProcess, options) => {
    const defaultQueueOpts = { 
        priority: 0, 
        attempts: 3, 
        delay: 2000, 
        removeOnComplete: true,
        removeOnFail: true
    };
    sampleQueue.add(jobName, objToProcess, options ?? defaultQueueOpts)  // Add jobs in the sample Queue.
}

// To check all jobs in bull-board UI.
const myServerAdapter = new ExpressAdapter();
myServerAdapter.setBasePath('/bull');
createBullBoard({queues: [new BullAdapter(sampleQueue)], serverAdapter: myServerAdapter })

module.exports = {
    createJobs,
    myServerAdapter
}