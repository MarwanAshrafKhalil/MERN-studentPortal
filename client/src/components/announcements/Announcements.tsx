import React from "react";
import "./_announcements.scss";
import { AccountCircle } from "@mui/icons-material";

function Announcements() {
  return (
    <div className="announce">
      <div className="announce__title">
        <h2>Announcements</h2>
        <p>These are the recents announcements</p>
      </div>

      <div className="announce__data">
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