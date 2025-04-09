import axios from 'axios';

const BASE_URL = 'https://api.github.com/Toafeek-Abbey';

/**
 * Fetch user data from GitHub by username
 * @param {string} username - GitHub username to search
 * @returns {Promise<Object>} - GitHub user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};