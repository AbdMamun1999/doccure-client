import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: [],
  search: "",
  departments: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      console.log(action.payload);
      state.search = action.payload;
    },
    addGender: (state, action) => {
      state.gender.push(action.payload);
    },
    removeGender: (state, action) => {
      state.gender = state.gender.filter((gen) => gen !== action.payload);
    },
    addDepartment: (state, action) => {
      state.departments.push(action.payload);
    },
    removeDepartment: (state, action) => {
      state.departments = state.departments.filter(
        (el) => el !== action.payload
      );
    },
  },
});

export const {
  addSearch,
  addGender,
  removeGender,
  addDepartment,
  removeDepartment,
} = filterSlice.actions;

export default filterSlice.reducer;
