import "./_announcements.scss";
import { AccountCircle } from "@mui/icons-material";
import { useAppSelector } from "../../redux/app/hooks";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import React from "react";

function Announcements() {
  const { data: announGroup, isLoading } = useAppSelector(
    (state) => state.announs
  );

  return (
    <div className="announce">
      <Link to={"/announcements"} className="announce__all">
        All
      </Link>
      <div className="announce__title">
        <h2>Announcements</h2>
        <p>These are the recents announcements</p>
      </div>

      {isLoading ? (
        <MoonLoader className="loader" color="#388696" />
      ) : (
        <div className="announce__data">
          {announGroup &&
            announGroup.slice(0, 4).map((item, index) => (
              <div key={index} className="announce__data__single">
                <AccountCircle
                  className="prof__icon"
                  style={{ fontSize: "48px" }}
                />

                <div className="announce__data__single__prof">
                  <p>{item.name}</p>
                  <p className="course">{item.course}</p>
                </div>
                <hr className="vertical" />

                <div className="announce__data__single__content">
                  <p>{item.announcements[0].content}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Announcements;
