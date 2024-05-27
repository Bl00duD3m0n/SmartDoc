import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI:', MONGODB_URI); // Отладочный вывод

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    console.log('Using cached database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      bufferCommands: false,
    };

    console.log('Connecting to database...');
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Database connected');
      return mongoose;
    }).catch((err) => {
      console.error('Database connection error:', err);
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
