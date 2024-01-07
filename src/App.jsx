import { useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import InputField from "./components/InputField.jsx";
import Alert from "./components/alert.jsx";
import uuid from "react-uuid";
import { createDate } from "./utils.jsx";

const data = [
  {
    title: "Wäsche waschen",
    content: "Viel zu tun heute",
    color: "#eb4d4b",
    timestamp: createDate(),
    id: uuid(),
  },
  {
    title: "Wäsche trocken",
    content: "Viel zu tun heute",
    color: "#2980b9",
    timestamp: createDate(),
    id: uuid(),
  },
];

function NoteApp() {
  const [openInputField, setOpenInputField] = useState(0);

  const [titleInput, setTitleInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [colorInput, setColorInput] = useState("#eb4d4b");

  function handleOpenInputfield() {
    setOpenInputField((size) => (size === 0 ? 80 : 0));
  }

  function newEntry() {
    return {
      titleInput,
      textInput,
      colorInput,
      id: uuid(),
      timestamp: createDate(),
    };
  }

  return (
    <>
      <Header onOpenInputField={handleOpenInputfield} />
      <List outputData={data} />
      <InputField
        openInputField={openInputField}
        onOpenInputField={handleOpenInputfield}
        titleInput={titleInput}
        onTitleInput={setTitleInput}
        textInput={textInput}
        onTextInput={setTextInput}
        colorInput={colorInput}
        onColorInput={setColorInput}
      />
      <Alert />
    </>
  );
}

export default NoteApp;
