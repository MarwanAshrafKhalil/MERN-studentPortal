import "./_header.scss";
import {
  Search,
  Notifications,
  Email,
  AccountCircle,
} from "@mui/icons-material/";

function Header() {
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

        <Notifications className="header__nav__icon" />

        <Email className="header__nav__icon" />
        <AccountCircle className="header__nav__icon" />
      </div>
    </div>
  );
}

export default Header;
