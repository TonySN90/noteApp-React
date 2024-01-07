import { useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import InputField from "./components/InputField.jsx";
import Alert from "./components/alert.jsx";

// const data = [
//   {
//     title: "Wäsche waschen",
//     content: "Viel zu tun heute",
//     color: "#eb4d4b",
//     timestamp: 'So: 07.01.2024 - 22:41',
//     id: crypto.randomUUID(),
//   },
// ];

function NoteApp() {
  const [entries, setNewEntry] = useState([]);
  // const [newEntryActive, setNewEntryActive] = useState(false);
  const [openInputField, setOpenInputField] = useState(0);

  function handleOpenInputfield() {
    setOpenInputField((size) => (size === 0 ? 80 : 0));
  }

  function handleAddEntry(entry) {
    setNewEntry((entries) => [...entries, entry]);
  }

  return (
    <>
      <Header onOpenInputField={handleOpenInputfield} />
      <List outputData={entries} />
      <InputField
        openInputField={openInputField}
        onOpenInputField={handleOpenInputfield}
        onAddEntry={handleAddEntry}
      />
      <Alert />
    </>
  );
}

export default NoteApp;
