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
          <CalendarMonth />
          <p>Schedule</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/">
        <li>
          <ImportContacts />
          <p>Courses</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/">
        <li>
          <School />
          <p>Gradebook</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/">
        <li>
          <ShowChart />
          <p>Performance</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/">
        <li>
          <Campaign />
          <p>Announcements</p>
        </li>
      </Link>
    </nav>
  );
}

export default Sidebar;
