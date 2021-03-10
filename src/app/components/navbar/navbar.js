export default function NavBar({ logo }) {
  return (
    <div className="App-header">
      <div className="App-header-actions">
        <div className="menu">Menu</div>
        <img className="logo" src={logo} alt="Logo" />
        <div className="search">search</div>
      </div>
      <div className="App-header-links">
        <p className="link">Editorials</p>
        <p className="link">Editorials</p>
        <p className="link">Editorials</p>
        <p className="link">Editorials</p>
        <p className="link">Editorials</p>
        <p className="link">Editorials</p>
        <p className="link">Editorials</p>
      </div>
    </div>
  );
}
