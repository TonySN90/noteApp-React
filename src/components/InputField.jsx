import { useState } from "react";
import Button from "./button";
import InputTitle from "./InputTitle";
import InputTextarea from "./inputTextarea";
import InputColor from "./InputColor";
import Alert from "./Alert";

export default function InputField({
  openInputField,
  onOpenInputField,
  entries,
  onAddEntry,
  selectedEntry,
  onSelectedEntry,
  title,
  setTitle,
  content,
  setContent,
  color,
  setColor,
}) {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertOpacity, setAlertOpacity] = useState(0);
  const isSelected = Object.keys(selectedEntry).length !== 0;
  const withoutEntry = entries.filter((entry) => entry !== selectedEntry);

  function closeForm(e) {
    e.preventDefault();
    onOpenInputField();
    setTitle("");
    setContent("");
    onSelectedEntry({});
  }

  function handleStore(e) {
    e.preventDefault();

    const newEntry = {
      title,
      content,
      color,
      timestamp: Date.now(),
      id: crypto.randomUUID(),
    };

    const pattern = /^\s*$/;

    function showAlert(message) {
      setAlertMessage(message);
      setAlertOpacity(1);
      setTimeout(() => {
        setAlertOpacity(0);
      }, 2500);
    }

    if (pattern.test(title)) {
      showAlert("Gib einen gültigen Titel ein");
    } else if (pattern.test(content)) {
      showAlert("Gib eine gültige Notiz ein");
    } else {
      onAddEntry((entries) =>
        isSelected
          ? [...withoutEntry, { ...newEntry, id: selectedEntry.id }]
          : [...entries, newEntry]
      );
      closeForm(e);
    }
  }

  function handleCloseForm(e) {
    closeForm(e);
  }

  function handleDelete(e) {
    onAddEntry([...withoutEntry]);
    closeForm(e);
  }

  return (
    <form
      id="inputField"
      style={{
        width: openInputField + "%",
        borderLeft: `${openInputField / 18}px solid #eb4d4b`,
      }}
    >
      <InputTitle titleInput={title} onTitleInput={setTitle} />
      <InputTextarea textInput={content} onTextInput={setContent} />
      <div className="button__area">
        <Button buttonTyp="arrow-left" handler={handleCloseForm}></Button>
        <Button buttonTyp="download" handler={handleStore}></Button>
        {isSelected && (
          <Button buttonTyp="trash" handler={handleDelete}></Button>
        )}
        <InputColor colorInput={color} onColorInput={setColor} />
      </div>
      <Alert message={alertMessage} opacityValue={alertOpacity} />
    </form>
  );
}
