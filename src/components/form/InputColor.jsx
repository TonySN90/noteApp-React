export default function InputColor({ color, onColor }) {
  return (
    <input
      type="color"
      id="input__color"
      value={color}
      onChange={(e) => onColor(e.target.value)}
    ></input>
  );
}
