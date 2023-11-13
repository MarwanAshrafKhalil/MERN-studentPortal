import "./_announcements.scss";
import { AccountCircle } from "@mui/icons-material";
import { useAppSelector } from "../../redux/app/hooks";
import { Link } from "react-router-dom";

function Announcements() {
  const announGroup = useAppSelector((state) => state.announs.data);

  return (
    <div className="announce">
      <Link to={"/announcements"} className="announce__all">
        All
      </Link>
      <div className="announce__title">
        <h2>Announcements</h2>
        <p>These are the recents announcements</p>
      </div>

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
    </div>
  );
}

export default Announcements;
