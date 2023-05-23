import axios from '~/api/axios';

const JOIN_ENTITY_URL = '/api/entity/join-entity';

const handleJoinEntity = async (legalEntityCode, token) => {
  const accountEmail = sessionStorage.getItem('email');

  try {
    const res = await axios.post(JOIN_ENTITY_URL, JSON.stringify({ accountEmail, legalEntityCode }), {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    if (res?.status === 200) {
      return true;
    }
  } catch (err) {
    console.log(err?.res);
  }
};

export default handleJoinEntity;
