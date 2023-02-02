import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <p>My Company</p>
      </div>
      <div className="right">
        <div className="menu">About</div>
        <div className="menu">Projects</div>
        <div className="menu">Contact</div>
        <button className="Login">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
