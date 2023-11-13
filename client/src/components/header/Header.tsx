import "./_header.scss";
import {
  Search,
  Notifications,
  Email,
  AccountCircle,
} from "@mui/icons-material/";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation();

  return (
    <div className="header">
      <h1>Welcome!</h1>

      <div className="header__nav">
        <form>
          <button type="submit">
            <Search className="header__nav__icon" />
          </button>

          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              e.target.value;
            }}
          />
        </form>

        <Notifications
          className="header__nav__icon"
          style={{ fontSize: "30px" }}
        />

        <Email className="header__nav__icon" style={{ fontSize: "30px" }} />
        <AccountCircle
          className="header__nav__icon"
          style={{ fontSize: "30px" }}
        />
      </div>
    </div>
  );
}

export default Header;
