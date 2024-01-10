import Button from "../elements/Button";

function Header({ handleVisibilityForm }) {
  return (
    <section id="header">
      <div className="header__container">
        <h1>NoteApp</h1>
        <div className="navbar">
          <Button buttonTyp="plus" handler={handleVisibilityForm}></Button>
        </div>
      </div>
    </section>
  );
}
export default Header;