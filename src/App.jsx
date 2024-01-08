import { useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import InputField from "./components/InputField.jsx";
import Alert from "./components/alert.jsx";

function NoteApp() {
  const [entries, setNewEntry] = useState([]);
  const [openInputField, setOpenInputField] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#eb4d4b");

  function handleOpenInputfield() {
    setOpenInputField((size) => (size === 0 ? 80 : 0));
  }

  function handleAddEntry(entry) {
    setNewEntry((entries) => [...entries, entry]);
  }

  function handleChangeEntry(entry) {
    setNewEntry(entry);
    console.log(entries);
  }

  return (
    <>
      <Header onOpenInputField={handleOpenInputfield} />

      {entries.length === 0 ? (
        <div className="info__text">
          Es ist noch keine Notiz vorhanden. Erstelle doch gleich einen Eintrag!
        </div>
      ) : (
        <List
          entries={entries}
          selectedEntry={selectedEntry}
          onSelectedEntry={setSelectedEntry}
          onOpenInputField={handleOpenInputfield}
          setTitle={setTitle}
          setContent={setContent}
          setColor={setColor}
        />
      )}

      {openInputField > 0 ? (
        <InputField
          openInputField={openInputField}
          onOpenInputField={handleOpenInputfield}
          entries={entries}
          onAddEntry={handleAddEntry}
          onChangeEntry={handleChangeEntry}
          selectedEntry={selectedEntry}
          onSelectedEntry={setSelectedEntry}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          color={color}
          setColor={setColor}
        />
      ) : null}

      <Alert />
    </>
  );
}

export default NoteApp;
