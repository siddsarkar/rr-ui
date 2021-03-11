import menuIcon from "../../../assets/menu.svg";
import searchIcon from "../../../assets/search.svg";

export default function NavBar({ logo }) {
  return (
    <div className="App-header">
      <div className="App-header-actions">
        <div className="menu">
          <img src={menuIcon} alt="m"></img>
        </div>
        <img className="logo" src={logo} alt="Logo" />
        <div className="search">
          <img src={searchIcon} alt="s"></img>
        </div>
      </div>
      <div className="App-header-links">
        <p className="link">Editorials |</p>
        <p className="link">Business |</p>
        <p className="link">Science & Technology |</p>
        <p className="link">Economy</p>
      </div>
    </div>
  );
}
