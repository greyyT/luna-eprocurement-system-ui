import { fetchDepartmentList } from '../actions/departmentListAction';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  departmentList: null,
  error: null,
  success: false,
};

const departmentListSlice = createSlice({
  name: 'departmentList',
  initialState,
  reducers: {
    setDepartmentList: (state, action) => {
      state.departmentList = action.payload;
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    addDepartmentList: (state, action) => {
      state.departmentList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Case for Fetch Department List
      .addCase(fetchDepartmentList.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchDepartmentList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.departmentList = action.payload;
      })
      .addCase(fetchDepartmentList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default departmentListSlice.reducer;
