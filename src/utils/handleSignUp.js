import axios from '~/api/axios';

const ACCOUNTS_URL = '/accounts';

const handleSignUp = async (email, username, password) => {
  try {
    // Go to axios.js in src/api to change rest api link
    const res = await axios.post(ACCOUNTS_URL, JSON.stringify({ email, username, password }), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (!err?.res) {
      throw new Error('No server response');
    } else if (err.res?.status === 400) {
      throw new Error('Username or email taken');
    } else {
      throw new Error('Registration failed');
    }
  }
};

export default handleSignUp;
