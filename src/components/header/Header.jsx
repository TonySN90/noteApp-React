import Button from "../elements/Button";

function Header({ children }) {
  return (
    <section id="header">
      <div className="header__container">
        <h1>NoteApp</h1>
        <div className="navbar">{children}</div>
      </div>
    </section>
  );
}
export default Header;
