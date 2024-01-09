function InputTitle({ titleInput, onTitleInput }) {
  return (
    <input
      type="text"
      name="title"
      id="input__title"
      placeholder="Titel eingeben"
      value={titleInput}
      onChange={(e) => onTitleInput(e.target.value)}
    ></input>
  );
}

export default InputTitle;
