import { useState } from "react";
import Button from "./button";
import InputTitle from "./InputTitle";
import InputTextarea from "./inputTextarea";
import InputColor from "./InputColor";
import { createDate } from "../utils";

export default function InputField({
  openInputField,
  onOpenInputField,
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
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [color, setColor] = useState("#eb4d4b");

  const isSelected = Object.keys(selectedEntry).length !== 0;
  console.log(isSelected);

  function handleStore(e) {
    e.preventDefault();

    if (!title || !content) return;

    const newEntry = {
      title,
      content,
      color,
      timestamp: createDate(),
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
        {false && <Button buttonTyp="trash"></Button>}
        <InputColor colorInput={color} onColorInput={setColor} />
      </div>
    </form>
  );
}
