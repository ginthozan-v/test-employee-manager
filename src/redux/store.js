import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
