export default function InputTextarea({ textInput, onTextInput }) {
  return (
    <textarea
      id="input__content"
      placeholder="Schreibe hier deine Notiz."
      value={textInput}
      onChange={(e) => onTextInput(e.target.value)}
    ></textarea>
  );
}
