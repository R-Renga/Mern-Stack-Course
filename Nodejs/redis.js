const Redis = require('ioredis');

// Create Redis client
const redis = new Redis({
  host: '192.168.50.247', // Your Redis server IP
  port: 6379,
  db: 1 // Use Redis Database 1
});

// Handle connection errors
redis.on('error', (err) => console.error('❌ Redis connection error:', err));

async function main() {
  try {
    console.log('✅ Connected to Redis');

    // Sample record (serialized format)
    const record = {
      id: 101,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      registeredAt: new Date().toISOString()
    };

    // Store serialized data
    await redis.set('Test5', JSON.stringify(record));
    console.log('🔹 Stored record in Redis');

    // Retrieve data and deserialize
    const value = await redis.get('Test5');
    console.log('🔹 Retrieved from Redis:', JSON.parse(value));

    // Close Redis connection
    await redis.quit();
    console.log('✅ Disconnected from Redis');
  } catch (error) {
    console.error('❌ Redis operation failed:', error);
  }
}

// Run the function
main();
