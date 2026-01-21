import axios from "axios";

const API_BASE_URL = "http://10.107.124.121:90/api/"; // Replace with your actual backend URL




// POST Method
export const postData = async (path, data) => {
    try 
    {
      const response = await axios.post(`${API_BASE_URL}${path}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } 
    catch (error) 
    {
      console.error("POST Error:", error.response?.data || error.message);
      throw error;
    }
  }

  // GET Method
  export const getData = async (path) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${path}`);
      return response.data;
    } catch (error) {
      console.error("GET Error:", error.response?.data || error.message);
      throw error;
    }
  };