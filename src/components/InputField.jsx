import Button from "./button";
import InputTitle from "./InputTitle";
import InputTextarea from "./inputTextarea";
import InputColor from "./InputColor";
import { createDate } from "../utils";

export default function InputField({
  openInputField,
  onOpenInputField,
  entries,
  onAddEntry,
  onChangeEntry,
  selectedEntry,
  onSelectedEntry,
  title,
  setTitle,
  content,
  setContent,
  color,
  setColor,
}) {
  const isSelected = Object.keys(selectedEntry).length !== 0;
  const withoutEntry = entries.filter((entry) => entry !== selectedEntry);

  function handleStore(e) {
    e.preventDefault();

    if (!title || !content) return;
    if (isSelected) onChangeEntry(withoutEntry);

    const newEntry = {
      title,
      content,
      color,
      timestamp: Date.now(),
      id: crypto.randomUUID(),
    };

    onAddEntry(newEntry);
    onOpenInputField();
    setTitle("");
    setContent("");
    onSelectedEntry({});
  }

  function handleCloseForm(e) {
    e.preventDefault();
    onOpenInputField();
    onSelectedEntry({});
  }

  return (
    <form id="inputField" style={{ width: openInputField + "%" }}>
      <InputTitle titleInput={title} onTitleInput={setTitle} />
      <InputTextarea textInput={content} onTextInput={setContent} />
      <div className="button__area">
        <Button buttonTyp="arrow-left" handler={handleCloseForm}></Button>
        <Button buttonTyp="download" handler={handleStore}></Button>
        {isSelected && <Button buttonTyp="trash"></Button>}
        <InputColor colorInput={color} onColorInput={setColor} />
      </div>
    </form>
  );
}
