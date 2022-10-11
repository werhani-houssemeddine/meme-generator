import TrollFace from "./TrollFace";

function Header() {
  return (
    <nav className="nav-header">
      <div className="logo">
        <TrollFace />
        <span>Meme Generator</span>
      </div>

      <h2>React Course - Project 3</h2>
    </nav>
  );
}

export default Header;
