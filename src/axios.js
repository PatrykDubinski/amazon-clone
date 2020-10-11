import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amaz-clone-17a77.cloudfunctions.net/api",
  // "http://localhost:5001/amaz-clone-17a77/us-central1/api", // API URL
});

export default instance;
