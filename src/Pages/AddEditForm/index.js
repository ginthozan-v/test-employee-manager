import { useEffect, useState } from "react";
import s from "./AddEditForm.module.css";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Form from "../../Components/FormComponent";
import {
  addEmployee,
  editEmployee,
} from "../../redux/features/employee/employeeSlice";

const AddEditForm = () => {
  const [initialValue, setInitialValue] = useState(null);

  const employeeList = useSelector((state) => state.employees.employees);

  let navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();

  const formSubmit = (values) => {
    if (id) {
      dispatch(editEmployee(values));
    } else {
      values.id = uuidv4();
      dispatch(addEmployee(values));
    }

    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (id) {
      setInitialValue(employeeList?.find((x) => x.id === id));
    } else {
      setInitialValue({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
      });
    }
  }, [id, employeeList]);

  return (
    <section className={s.section}>
      <Row justify="center">
        <Col xs={10} lg={8} className={s.header}>
          <h1 className={s.title}>Employee Info</h1>
          {initialValue && (
            <Form formSubmit={formSubmit} initialValue={initialValue} />
          )}
        </Col>
      </Row>
    </section>
  );
};

export default AddEditForm;
