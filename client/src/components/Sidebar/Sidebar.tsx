import {
  CalendarMonth,
  Campaign,
  Home,
  ImportContacts,
  School,
  ShowChart,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import "./_sidebar.scss";

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link className="sidebar__link " to="/">
        <li>
          <Home className="sidebar__icon" />
          <p>Dashboard</p>
        </li>
      </Link>

      <Link className="sidebar__link " to="/">
        <li>
          <CalendarMonth className="sidebar__icon" />
          <p>Schedule</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/">
        <li>
          <ImportContacts className="sidebar__icon" />
          <p>Courses</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/">
        <li>
          <School className="sidebar__icon" />
          <p>Gradebook</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/">
        <li>
          <ShowChart className="sidebar__icon" />
          <p>Performance</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/">
        <li>
          <Campaign className="sidebar__icon" />
          <p>Announcements</p>
        </li>
      </Link>
    </nav>
  );
}

export default Sidebar;
