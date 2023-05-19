const bullQueue = require('bull');
const { REDIS } = require('../config');


// Bull Queue initialized
const sampleQueue = new bullQueue("firstQueue", {
    redis: {
        host: REDIS.HOST,
        port: REDIS.PORT,
        password: REDIS.PASSWORD
    }
});

console.info('Bull queue loaded...🎯');

const handleFailedJobs = (job, err) => {
    if (job.attemptsMade >= job.opts.attempts) {
        console.info(`🤯 Job failures above threshold ${job.name}`, err);
        // job.remove();
        return null;
    }
    console.info(`🤯 Job ${job.name} failed with ${err.message}. ${job.opts.attempts - job.attemptsMade} attempts left!`);
};
  
const handleCompletedJobs = job => {
    console.info(`🌿 Job ${job.name} completed!`);
    // job.remove();
};

const handleStalledJobs = job => {
    console.info(`Job ${job.name} stalled!`);
};

// Event listeners
sampleQueue.on("failed", handleFailedJobs);
sampleQueue.on("completed", handleCompletedJobs);
sampleQueue.on("stalled", handleStalledJobs);

module.exports = {
    sampleQueue
}