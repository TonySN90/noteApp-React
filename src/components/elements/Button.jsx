export default function Button({ buttonTyp, handler }) {
  return (
    <button className="button" onClick={(e) => handler(e)}>
      <i className={`fa-solid fa-${buttonTyp} icon`}></i>
    </button>
  );
}
