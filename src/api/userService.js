import axios from './axios';

export const setUserRole = async (token, userEmail, role) => {
  const USER_URL = `/api/account/set-role`;

  try {
    await axios.post(USER_URL, JSON.stringify({ userEmail, role }), {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    return true;
  } catch (err) {
    console.log(!err?.res);
    return undefined;
  }
};
