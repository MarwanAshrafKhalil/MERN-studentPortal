import { Assignment, HourglassBottom } from "@mui/icons-material";
import moment from "moment";
import { useAppSelector } from "../../redux/app/hooks";
import "./allTasks.scss";

function AllTasks() {
  const quizzesGroup = useAppSelector((state) => state.quizzes.data);

  console.log("print: ", quizzesGroup);
  return (
    <div className="tasks">
      <div className="tasks__title">
        <h2>What's due</h2>
        <span>Check the due quizzes and assignments</span>
      </div>

      {quizzesGroup &&
        quizzesGroup.map((item) =>
          item.quizzes.map((quiz, index) => (
            <div key={index} className="tasks__quizz">
              <div className="tasks__quizz__title">
                <HourglassBottom
                  className="tasks__quizz__icon"
                  style={{ fontSize: "30px" }}
                />
                <p>{item.quizzes[index].name}</p>
              </div>

              <div className="tasks__quizz__details">
                <span> Course: {item.name}</span>
                <span> Topic: {quiz.topic}</span>
                <span>
                  Due to: {moment(quiz.dueDate.toString()).format("LL")}
                </span>
              </div>
              <button type="button" className="tasks__quizz__button">
                {" "}
                Start Quiz{" "}
              </button>
              <hr />
            </div>
          ))
        )}

      {/* <hr className="vertical_line" /> */}

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

export default AllTasks;
