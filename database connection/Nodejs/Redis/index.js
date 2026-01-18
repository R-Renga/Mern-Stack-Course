import Redis from 'ioredis';

// Redis connection details
const redis = new Redis({
  host: '192.168.50.247',
  port: 6379,
  db:4
});

async function main() {
  try {
    console.log('Connecting to Redis...');

    // Perform a simple operation: Set a key
    const key = 'my_sample_key';
    const value = 'Hello from Node.js!';
    
    console.log(`Setting key: ${key} to value: ${value}`);
    await redis.set(key, value);

    // Get the key back
    const result = await redis.get(key);
    console.log(`Retrieved value for ${key}: ${result}`);

    // Optional: Set a key with expiration (e.g., 10 seconds)
    await redis.set('temp_key', 'I will disappear in 10s', 'EX', 10);
    console.log('Set temp_key with 10s expiration');

  } catch (error) {
    console.error('Error connecting to Redis:', error);
  } finally {
    // Close the connection
    redis.disconnect();
    console.log('Disconnected from Redis');
  }
}

main();
