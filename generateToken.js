import dotenv from 'dotenv'; // Use import for dotenv
import jwt from 'jsonwebtoken'; // Use import for jsonwebtoken

dotenv.config(); // Load environment variables from .env

// Payload data
const payload = {
  userId: '12345',
  username: 'exampleUser',
};

// Generate the token
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('Generated JWT:', token);

export default jwt;