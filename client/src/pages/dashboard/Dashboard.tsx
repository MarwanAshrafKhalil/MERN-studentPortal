import React, { useEffect } from "react";
import "./dashboard.scss";
import { Col, Row } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import Announcements from "../../components/announcements/Announcements";
import Tasks from "../../components/tasks/Tasks";
import { useAppDispatch } from "../../redux/app/hooks";
import { fetchQuizzes } from "../../redux/features/quizzes/quizzes.action";
import { fetchAnnouns } from "../../redux/features/announs/announs.action";

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(fetchQuizzes());
      dispatch(fetchAnnouns());
    } catch (error) {
      console.log(error);
    }
  }, []);
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
