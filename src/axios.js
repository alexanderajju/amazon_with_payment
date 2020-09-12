import axios from "axios";
// http://localhost:5001/full-7632a/us-central1/api
const instance = axios.create({
  baseURL: "http://localhost:3000/",
  //   API URL
});

export default instance;
