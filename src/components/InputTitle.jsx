export default function InputTitle({
  titleInput,
  onTitleInput,
  selectedEntry,
}) {
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
