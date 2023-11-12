import React from "react";
import "./_tasks.scss";
import { HourglassBottom, Assignment } from "@mui/icons-material";

function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks__title">
        <h2>What's due</h2>
        <span>Check the due quizzes and assignments</span>
      </div>

      <div className="tasks__quizz">
        <div className="tasks__quizz__title">
          <HourglassBottom
            className="tasks__quizz__icon"
            style={{ fontSize: "30px" }}
          />
          <p>Unit 2 quiz</p>
        </div>

        <div className="tasks__quizz__details">
          <span> Course: Physics 02</span>
          <span> Topic: Unit2: Motion and forces</span>
          <span>Due to: 20 Dec 2017 -009:00PM</span>
        </div>
        <button type="button" className="tasks__quizz__button">
          {" "}
          Start Quiz{" "}
        </button>
      </div>

      <hr className="vertical_line" />

      <div className="tasks__quizz">
        <div className="tasks__quizz__title">
          <Assignment
            className="tasks__quizz__icon"
            style={{ fontSize: "30px" }}
          />
          <p>12 - 12 Assignment</p>
        </div>

        <div className="tasks__quizz__details">
          <span> Course: Physics 02</span>
          <span> Topic: Unit2: Motion and forces</span>
          <span>Due to: 20 Dec 2017 -009:00PM</span>
        </div>
        <button type="button" className="tasks__quizz__button">
          {" "}
          Start Quiz{" "}
        </button>
      </div>
    </div>
  );
}

export default Tasks;
