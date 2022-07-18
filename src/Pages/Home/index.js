import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Space, Col, Row, Button, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import s from "./Home.module.css";

import TableComponent from "../../components/TableComponent";
import {
  getEmployees,
  removeEmployee,
} from "../../redux/features/employee/employeeSlice";
import { EmployeeData } from "../../data/FakeData";

const Home = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      render: (_, { email }) => <Tag color="volcano">{email}</Tag>,
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (_, { gender }) => (
        <p style={{ textTransform: "capitalize", margin: 0 }}>{gender}</p>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/employee/edit/${record.id}`}>Edit</Link>
          <Link to="#" onClick={() => deleteItem(record.id)}>
            Delete
          </Link>
        </Space>
      ),
    },
  ];

  const employeeList = useSelector((state) => state.employees.employees);
  const employees = employeeList.map((element) => ({
    ...element,
    key: element.id,
  }));

  const deleteItem = async (id) => {
    if (window.confirm("Do you want to delete this permanently?")) {
      dispatch(removeEmployee({ id }));
    }
  };

  useEffect(() => {
    if (localStorage?.employees) {
      dispatch(getEmployees());
    }else{
      localStorage.setItem("employees", JSON.stringify(EmployeeData));
    }
  }, []);

  return (
    <section className={s.section}>
      <Row justify="center">
        <Col xs={20} lg={18} className={s.header}>
          <h1>Summary</h1>
          <Link to="/employee/add">
            <Button className={s.button}>Add</Button>
          </Link>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} lg={18}>
          <TableComponent dataSource={employees} columns={columns} />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
