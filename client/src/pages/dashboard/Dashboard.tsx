import React from "react";
import "./dashboard.scss";
import { Col, Row } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import Announcements from "../../components/announcements/Announcements";
import Tasks from "../../components/tasks/Tasks";

function Dashboard() {
  return (
    <div className="dashboard">
      <Hero />

      <Row>
        <Col xs={12} md={8} lg={9}>
          <Announcements />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Tasks />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
