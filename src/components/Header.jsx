import Button from "./button";

export default function Header({ onOpenInputField }) {
  return (
    <section id="header">
      <div className="header__container">
        <h1>NoteApp</h1>
        <div className="navbar">
          <Button buttonTyp="plus" handler={onOpenInputField}></Button>
        </div>
      </div>
    </section>
  );
}
