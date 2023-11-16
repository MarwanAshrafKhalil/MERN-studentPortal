import { AccountCircle } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import "./allAnnouncements.scss";

import { useEffect } from "react";
import { fetchAnnouns } from "../../redux/features/announs/announs.action";
import { MoonLoader } from "react-spinners";
import React from "react";

function AllAnnouncements() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(fetchAnnouns());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { data: announGroup, isLoading } = useAppSelector(
    (state) => state.announs
  );

  return (
    <div className="allannounce">
      <div className="allannounce__title">
        <h2>Announcements</h2>
        <p>These are the recents announcements</p>
      </div>

      {isLoading ? (
        <MoonLoader className="loader" color="#388696" />
      ) : (
        <div className="allannounce__data">
          {announGroup &&
            announGroup.map((item, index) => (
              <div key={index} className="allannounce__data__single">
                <AccountCircle
                  className="prof__icon"
                  style={{ fontSize: "48px" }}
                />

                <div className="allannounce__data__single__prof">
                  <p>{item.name}</p>
                  <p className="course">{item.course}</p>
                </div>
                <hr className="vertical" />

                <div className="allannounce__data__single__content">
                  <p>{item.announcements[0].content}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default AllAnnouncements;
