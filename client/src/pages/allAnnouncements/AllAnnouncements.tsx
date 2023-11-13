import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import "./allAnnouncements.scss";
import { Col, Container, Row } from "react-bootstrap";
import { fetchAnnouns } from "../../redux/features/announs/announs.action";
import { useEffect } from "react";

function AllAnnouncements() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(fetchAnnouns());
    } catch (error) {
      console.log(error);
    }
  }, []);
  const announGroup = useAppSelector((state) => state.announs.data);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={12}>
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
                announGroup.map((item) => (
                  <div className="announce__data__single">
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
        </Col>
      </Row>
    </Container>
  );
}

export default AllAnnouncements;
