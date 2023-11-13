import {
  CalendarMonth,
  Campaign,
  Home,
  ImportContacts,
  School,
  ShowChart,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import logo from "../../assets/Udemy-Logo.png";
import "./_sidebar.scss";

function Sidebar() {
  const [t, i18n] = useTranslation();
  console.log(i18n.language);

  return (
    <nav className="sidebar">
      <img className="sidebar__image" src={logo} alt="" />

      <Link className="sidebar__link " to="/dashboard">
        <li>
          <Home className="sidebar__icon" />
          <p>{t("Dashboard")}</p>
        </li>
      </Link>

      <Link className="sidebar__link " to="/">
        <li>
          <CalendarMonth className="sidebar__icon" />
          <p>{t("Schedule")}</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/">
        <li>
          <ImportContacts className="sidebar__icon" />
          <p>{t("Courses")}</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/">
        <li>
          <School className="sidebar__icon" />
          <p>{t("Gradebook")}</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/">
        <li>
          <ShowChart className="sidebar__icon" />
          <p>{t("Performance")}</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/">
        <li>
          <Campaign className="sidebar__icon" />
          <p>{t("Announcements")}</p>
        </li>
      </Link>

      {/* change language functionality */}

      {/* {i18n.language == "en" && (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          AR
        </button>
      )}
      {i18n.language == "ar" && (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </button>
      )} */}
    </nav>
  );
}

export default Sidebar;
