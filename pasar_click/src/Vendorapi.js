// src/api.js
import axios from 'axios';

export const fetchVendors = async () => {
    try {
      const response = await axios.get('/data/Vendor.json');
      return response.data.vendor; // Access the array under the "vendor" key
    } catch (error) {
      console.error('Error fetching vendor data:', error);
      throw error;
    }
  };