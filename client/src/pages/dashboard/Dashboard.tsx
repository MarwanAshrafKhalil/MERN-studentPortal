import React from "react";
import "./dashboard.scss";
import { Col, Row } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import Announcements from "../../components/announcements/Announcements";

function Dashboard() {
  return (
    <div className="dashboard">
      <Hero />

      <Row>
        <Col xs={12} md={8}>
          <Announcements />
          {/* <div className="col-content dashboard__announ">Content for col 8</div> */}
        </Col>
        <Col xs={12} md={4}>
          <div className="col-content dashboard__tasks">Content for col 4</div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
