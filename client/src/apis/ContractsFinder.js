import axios from "axios";

// Base url for commands related requests
export default axios.create({
    baseURL: "http://localhost:3005/api/v1/contracts"
})