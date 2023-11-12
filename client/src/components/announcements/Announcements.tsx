import React from "react";
import "./_announcements.scss";
import { AccountCircle } from "@mui/icons-material";
import { useAppSelector } from "../../redux/app/hooks";

function Announcements() {
  const announGroup = useAppSelector((state) => state.announs.data);
  const { name, ...rest } = announGroup;
  // console.log(name);
  // console.log(announGroup.name);
  // console.log(announGroup.name);

  announGroup.map((item) => console.log(item.name));
  return (
    <div className="announce">
      <div className="announce__title">
        <h2>Announcements</h2>
        <p>These are the recents announcements</p>
      </div>

      <div className="announce__data">
        {announGroup &&
          announGroup.map((item) => (
            <div className="announce__data__single">
              <AccountCircle
                className="prof__icon"
                style={{ fontSize: "48px" }}
              />

              <div className="announce__data__single__prof">
                <p>{item.name}</p>
                <p className="course">Math 101</p>
              </div>
              <hr className="vertical" />

              <div className="announce__data__single__content">
                <p>{item.announcements[-1]}</p>
              </div>
            </div>
          ))}

        <div className="announce__data__single">
          <AccountCircle className="prof__icon" style={{ fontSize: "48px" }} />

          <div className="announce__data__single__prof">
            <p>Mr.Ahmed Mostafa</p>
            <p className="course">Math 101</p>
          </div>
          <hr className="vertical" />

          <div className="announce__data__single__content">
            <p>
              Reminder: The deadline for submitting your research paper is
              approaching. Please ensure you submit it by November 15th.
            </p>
          </div>
        </div>

        <div className="announce__data__single">
          <AccountCircle className="prof__icon" style={{ fontSize: "48px" }} />

          <div className="announce__data__single__prof">
            <p>Mr.Ahmed Mostafa</p>
            <p className="course">Math 101</p>
          </div>
          <hr className="vertical" />

          <div className="announce__data__single__content">
            <p>
              Attention students: The guest lecture scheduled for tomorrow has
              been postponed. A new date will be announced soon.
            </p>
          </div>
        </div>

        <div className="announce__data__single">
          <AccountCircle className="prof__icon" style={{ fontSize: "48px" }} />

          <div className="announce__data__single__prof">
            <p>Mr.Ahmed Mostafa</p>
            <p className="course">Math 101</p>
          </div>
          <hr className="vertical" />

          <div className="announce__data__single__content">
            <p>
              Important notice: The registration for next semester's courses
              will open on November 20th. Plan your schedule accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
