import axios from 'axios';

// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT, // Backend's base URL
  // Add other custom configuration options here
  // For sending and recieving cookies for requests
  //withCredentials: true,
});

export default axiosInstance;