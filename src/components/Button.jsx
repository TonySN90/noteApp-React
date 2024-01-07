export default function Button({ buttonTyp, handler }) {
  return (
    <button className="button" onClick={() => handler()}>
      <i className={`fa-solid fa-${buttonTyp} icon`}></i>
    </button>
  );
}
