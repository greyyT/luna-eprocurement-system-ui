import axios from '~/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMemberList = createAsyncThunk(
  'memberList/fetchMemberList',
  async ({ token, legalEntityCode }, { rejectWithValue }) => {
    const USER_LIST_URL = `/api/entity/${legalEntityCode}/account`;

    try {
      const res = await axios.get(USER_LIST_URL, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      if (err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.messages);
    }
  },
);

export const changeMemberInfo = createAsyncThunk(
  'memberList/changeMemberInfo',
  async ({ token, type, code, email }, { rejectWithValue }) => {
    const MEMBER_CHANGE_URL = `/api/${type}/set-${type}`;

    try {
      await axios.post(MEMBER_CHANGE_URL, JSON.stringify({ code, userEmail: email }), {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      return { code };
    } catch (err) {
      if (err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.messages);
    }
  },
);
