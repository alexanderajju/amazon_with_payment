import axios from "axios";
// http://localhost:5001/full-7632a/us-central1/api
const instance = axios.create({
  baseURL: "https://amazon-backend-2057456.herokuapp.com"
  // /full-7632a/us-central1/api",
  //   API URL
});

export default instance;
