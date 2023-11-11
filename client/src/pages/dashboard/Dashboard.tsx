import React from "react";
import "./dashboard.scss";
import { Col, Row } from "react-bootstrap";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* <div className="dashboard__hero">dashboard</div> */}

      <Row>
        <Col className="col-md-4 dashboard__hero">col 1</Col>
        <Col className="col-md-4 dashboard__hero">col 1</Col>
      </Row>
    </div>
  );
}

export default Dashboard;
