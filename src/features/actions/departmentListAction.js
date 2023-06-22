import axios from '~/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDepartmentList = createAsyncThunk(
  'departmentList/fetchDepartmentList',
  async ({ token, legalEntityCode }, { rejectWithValue }) => {
    const DEPARTMENT_URL = `/api/department/${legalEntityCode}`;

    try {
      const res = await axios.get(DEPARTMENT_URL, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createDepartment = createAsyncThunk(
  'departmentList/createDepartment',
  async (token, code, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        '/api/department/',
        { code },
        {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          withCredentials: true,
        },
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
