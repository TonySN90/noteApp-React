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
  const isSelected = Object.keys(selectedEntry).length !== 0;
  const withoutEntry = entries.filter((entry) => entry !== selectedEntry);

  function handleStore(e) {
    e.preventDefault();

    const newEntry = {
      title,
      content,
      color,
      timestamp: Date.now(),
      id: crypto.randomUUID(),
    };

    function displayAlertMessage() {
      alert.style.opacity = "1";
      setTimeout(() => {
        alert.style.opacity = "0";
      }, 2500);
    }

    const pattern = /^\s*$/;

    if (pattern.test(title)) {
      setAlertMessage("Gib einen gültigen Titel ein");
    } else if (pattern.test(content)) {
      setAlertMessage("Gib eine gültige Notiz ein");
    } else {
      onAddEntry((entries) =>
        isSelected
          ? [...withoutEntry, { ...newEntry, id: selectedEntry.id }]
          : [...entries, newEntry]
      );
      console.log(entries);
      onOpenInputField();
      setTitle("");
      setContent("");
      onSelectedEntry({});
    }
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
      <Alert message={alertMessage} />
    </form>
  );
}
