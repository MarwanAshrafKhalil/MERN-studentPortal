import { Assignment, HourglassBottom } from "@mui/icons-material";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import "./allTasks.scss";
import { fetchQuizzes } from "../../redux/features/quizzes/quizzes.action";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";

function AllTasks() {
  const dispatch = useAppDispatch();

  const { data: quizzesGroup, isLoading } = useAppSelector(
    (state) => state.quizzes
  );

  useEffect(() => {
    try {
      dispatch(fetchQuizzes());
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="alltasks">
      <div className="alltasks__title">
        <h2>What's due</h2>
        <span>Check the due quizzes and assignments</span>
      </div>

      {isLoading ? (
        <MoonLoader className="loader" color="#388696" />
      ) : (
        <>
          {quizzesGroup &&
            quizzesGroup.map((item) =>
              item.quizzes.map((quiz, index) => (
                <div key={index} className="alltasks__quizz">
                  <div className="alltasks__quizz__title">
                    <HourglassBottom
                      className="alltasks__quizz__icon"
                      style={{ fontSize: "30px" }}
                    />
                    <p>{item.quizzes[index].name}</p>
                  </div>

                  <div className="alltasks__quizz__details">
                    <span> Course: {item.name}</span>
                    <span> Topic: {quiz.topic}</span>
                    <span>
                      Due to: {moment(quiz.dueDate.toString()).format("LL")}
                    </span>
                  </div>
                  <button type="button" className="alltasks__quizz__button">
                    {" "}
                    Start Quiz{" "}
                  </button>
                  <hr />
                </div>
              ))
            )}
        </>
      )}

      {/* <hr className="vertical_line" /> */}

      <div className="alltasks__quizz">
        <div className="alltasks__quizz__title">
          <Assignment
            className="alltasks__quizz__icon"
            style={{ fontSize: "30px" }}
          />
          <p>12 - 12 Assignment</p>
        </div>

        <div className="alltasks__quizz__details">
          <span> Course: Physics 02</span>
          <span> Topic: Unit2: Motion and forces</span>
          <span>Due to: 20 Dec 2017 -009:00PM</span>
        </div>
        <button type="button" className="alltasks__quizz__button">
          {" "}
          Start Quiz{" "}
        </button>
      </div>
    </div>
  );
}

export default AllTasks;
