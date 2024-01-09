import { useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import InputField from "./components/InputField.jsx";

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
    setNewEntry(entry);
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

      <InputField
        openInputField={openInputField}
        onOpenInputField={handleOpenInputfield}
        entries={entries}
        onAddEntry={handleAddEntry}
        selectedEntry={selectedEntry}
        onSelectedEntry={setSelectedEntry}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        color={color}
        setColor={setColor}
      />
    </>
  );
}

export default NoteApp;
