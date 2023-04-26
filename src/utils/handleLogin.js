import axios from '~/api/axios';

const LOGIN_URL = '/auth';

const handleLogin = async (email, password) => {
  try {
    // Go to axios.js in src/api to change rest api link
    const res = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (!err?.res) {
      throw new Error('No Server Response');
    } else if (err.res?.status === 400) {
      throw new Error('Missing username or password');
    } else {
      throw new Error('Login fail');
    }
  }
};

export default handleLogin;
