import {
  CalendarMonth,
  Campaign,
  Home,
  ImportContacts,
  School,
  ShowChart,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/Udemy-Logo.png";
import "./_sidebar.scss";

interface Props {
  sidebar: boolean;
  handleToggleSidebar: () => void;
}

export const Sidebar: React.FC<Props> = ({ sidebar, handleToggleSidebar }) => {
  const [t, i18n] = useTranslation();
  const languageFunc = false;

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar()}
    >
      <img className="sidebar__image" src={logo} alt="" />

      <Link className="sidebar__link " to="/dashboard">
        <li>
          <Home className="sidebar__icon" />
          <p>{t("Dashboard")}</p>
        </li>
      </Link>

      <Link className="sidebar__link " to="/schedule">
        <li>
          <CalendarMonth className="sidebar__icon" />
          <p>{t("Schedule")}</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/courses">
        <li>
          <ImportContacts className="sidebar__icon" />
          <p>{t("Courses")}</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/gradebook">
        <li>
          <School className="sidebar__icon" />
          <p>{t("Gradebook")}</p>
        </li>
      </Link>

      <Link className=" sidebar__link" to="/performance">
        <li>
          <ShowChart className="sidebar__icon" />
          <p>{t("Performance")}</p>
        </li>
      </Link>
      <Link className="sidebar__link " to="/announcements">
        <li>
          <Campaign className="sidebar__icon" />
          <p>{t("Announcements")}</p>
        </li>
      </Link>

      {/* change languagefunctionality */}

      {languageFunc && (
        <>
          {i18n.language == "en" && (
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
          )}
        </>
      )}
    </nav>
  );
};

export default Sidebar;
