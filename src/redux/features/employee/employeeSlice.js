import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../../api";

const initialState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    getEmployees: (state) => {
      const data = api.fetchEmployees();
      state.employees = data;
    },
    addEmployee: (state, action) => {
      const data = api.createEmployee(action.payload);
      state.employees = data;
    },
    editEmployee: (state, action) => {
      const data = api.updateEmployee(action.payload);
      state.employees = data;
    },
    removeEmployee: (state, action) => {
      const data = api.deleteEmployee(action.payload.id);
      state.employees = data;
    },
  },
});

export const { getEmployees, addEmployee, editEmployee, removeEmployee } =
  employeeSlice.actions;
  
export default employeeSlice.reducer;
