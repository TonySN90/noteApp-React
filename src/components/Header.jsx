import Button from "./button";

export default function Header({ handleOpenForm }) {
  return (
    <section id="header">
      <div className="header__container">
        <h1>NoteApp</h1>
        <div className="navbar">
          <Button buttonTyp="plus" handler={handleOpenForm}></Button>
        </div>
      </div>
    </section>
  );
}
