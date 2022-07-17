export const fetchEmployees = () => {
  let data = [];
  if(localStorage?.employees){
     data = JSON.parse(localStorage?.employees);
  }
  return data;
};

export const createEmployee = (value) => {
  let data = [];
  if(localStorage?.employees){
     data = JSON.parse(localStorage?.employees);
  }
  const newData = [...data, value];
  localStorage.removeItem("employees");
  localStorage.setItem("employees", JSON.stringify(newData));
  return newData;
};

export const updateEmployee = (value) => {
  let data = [];
  if(localStorage?.employees){
     data = JSON.parse(localStorage?.employees);
  }
  const newData = data.map((employee) => {
    if (employee.id === value.id) {
      employee.firstName = value.firstName;
      employee.lastName = value.lastName;
      employee.email = value.email;
      employee.phone = value.phone;
      employee.gender = value.gender;
    }
    return employee;
  });
  
  localStorage.removeItem("employees");
  localStorage.setItem("employees", JSON.stringify(newData));
  return newData;
};

export const deleteEmployee = (id) => {
  let data = [];
  if(localStorage?.employees){
     data = JSON.parse(localStorage?.employees);
  }
  const newData = data.filter((employee) => employee.id !== id);
  localStorage.removeItem("employees");
  localStorage.setItem("employees", JSON.stringify(newData));
  return newData;
};
