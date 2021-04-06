import axios from 'axios';

axios.defaults.baseURL = 'https://backend-for-pro-test.herokuapp.com';

async function fetchTechQuestions() {
  try {
    const config = {
      url: `techquiz/questions`,
    };

    const { data } = await axios(config);
    return data;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = {
  fetchTechQuestions,
};

export default api;