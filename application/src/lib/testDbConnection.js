const { Pool } = require('pg');

async function testDbConnection(connectionString) {
  // Create a new pool with the connection string
  const pool = new Pool({
    connectionString,
    connectionTimeoutMillis: 50000,
    // Add these options to help with connection issues
    ssl: {
      rejectUnauthorized: true,
      // You might need to adjust this for Neon.tech
    },
    keepAlive: true,
    idleTimeoutMillis: 30000,
    retry: {
      match: [
        /ETIMEDOUT/,
        /ECONNREFUSED/,
        /ECONNRESET/
      ],
      max: 3
    }
  });

  try {
    // Attempt to connect and execute a simple query
    console.log('Attempting to connect to database...');
    const client = await pool.connect();
    console.log('Client connected, executing test query...');
    await client.query('SELECT NOW()');
    client.release();
    
    // If we get here, connection was successful
    console.log('✅ Database connection successful');
    return {
      success: true,
      message: 'Connection successful'
    };
  } catch (error) {
    // Log the specific error with more details
    const errorDetails = {
      message: error.message,
      code: error.code,
      detail: error.detail,
      hint: error.hint,
      stack: error.stack // Adding stack trace for more context
    };
    
    console.error('❌ Database connection failed:', errorDetails);
    return {
      success: false,
      error: errorDetails
    };
  } finally {
    // Always close the pool
    await pool.end();
  }
}

// Example usage with async/await:
async function main() {
  const connectionString = "postgresql://neondb_owner:X0S7jdxsHzGe@ep-summer-mountain-a5zw81qi.us-east-2.aws.neon.tech/neondb?sslmode=require";
  console.log('Testing connection to:', connectionString.replace(/\/\/.*:(.*)@/, '//<credentials>@'));
  const result = await testDbConnection(connectionString);
  
  if (!result.success) {
    console.log('Connection failed with error:', result.error);
  }
}

main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});

module.exports = testDbConnection; 