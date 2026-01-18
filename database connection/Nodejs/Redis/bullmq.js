import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';

// Reuse the same connection details
const connection = new IORedis({
  host: '192.168.50.247',
  port: 6379,
  db: 4, // Using the same DB as your index.js example
  maxRetriesPerRequest: null, // Required by BullMQ
});

// 1. Create a Queue
const myQueue = new Queue('my-learning-queue', { connection });

async function addJobs() {
  console.log('Adding jobs to the queue...');
  
  // Add a few jobs
  await myQueue.add('email-job', { email: 'user@example.com', subject: 'Welcome!' });
  await myQueue.add('report-job', { type: 'daily-sales', date: '2023-10-27' });
  
  console.log('Jobs added!');
}

async function processJobs() {
  console.log('Starting worker to process jobs...');

  // 2. Create a Worker to process jobs from the queue
  const worker = new Worker('my-learning-queue', async (job) => {
    console.log(`[Worker] Processing job ${job.id}: ${job.name}`);
    console.log(`[Worker] Data:`, job.data);

    // Simulate some work (e.g., sending an email)
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`[Worker] Job ${job.id} completed!`);
  }, { connection });

  // Listen for completed jobs
  worker.on('completed', (job) => {
    console.log(`[System] Job ${job.id} has finished successfully.`);
  });

  worker.on('failed', (job, err) => {
    console.log(`[System] Job ${job.id} has failed with ${err.message}`);
  });
}

async function main() {
  await addJobs();
  await processJobs();
  
  // Keep the script running for a bit to see the output, then exit
  // In a real app, the worker would keep running indefinitely
  setTimeout(async () => {
    console.log('Closing queues and connections...');
    await myQueue.close();
    // Note: In a real app you'd want to close the worker gracefully too
    process.exit(0);
  }, 5000);
}

main();
