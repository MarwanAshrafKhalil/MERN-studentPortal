import "./_header.scss";
import {
  Search,
  Notifications,
  Email,
  AccountCircle,
  Menu,
} from "@mui/icons-material/";
import { useTranslation } from "react-i18next";
export interface HeaderProps {
  handleToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ handleToggleSidebar }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className="header">
      <Menu className="header__menu" onClick={() => handleToggleSidebar()} />

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
};

export default Header;
