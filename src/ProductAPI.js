// Products API
import axios from 'axios';

export const fetchProducts = async () => {
    try {
      const response = await axios.get('/Data/products.json');
      return response.data.products; // Access the array under the "vendor" key
    } catch (error) {
      console.error('Error fetching vendor data:', error);
      throw error;
    }
  };
