import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <Row justify="center">
        <Col xs={20} lg={18}>
          <nav>
            <Link to="/" className={s.title}>
              Employer Manager
            </Link>
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
