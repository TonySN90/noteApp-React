export default function InputColor({ colorInput, onColorInput }) {
  return (
    <input
      type="color"
      id="input__color"
      defaultValue={colorInput}
      onChange={(e) => onColorInput(e.target.value)}
    ></input>
  );
}
