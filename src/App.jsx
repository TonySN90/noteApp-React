import { useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import InputField from "./components/InputField.jsx";

function NoteApp() {
  const [entries, setNewEntry] = useState([]);
  const [openForm, setOpenForm] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#eb4d4b");

  function handleOpenForm() {
    setOpenForm((size) => (size === 0 ? 80 : 0));
  }

  function handleAddEntry(entry) {
    setNewEntry(entry);
  }

  return (
    <>
      <Header handleOpenForm={handleOpenForm} />

      {entries.length === 0 ? (
        <div className="info__text">
          Es ist noch keine Notiz vorhanden. Erstelle doch gleich einen Eintrag!
        </div>
      ) : (
        <List
          handleOpenForm={handleOpenForm}
          inputsStates={{ setTitle, setContent, setColor }}
          entriesStates={{ entries, setSelectedEntry }}
        />
      )}

      <InputField
        colorTest={color}
        onColor={setColor}
        openInputField={openForm}
        onOpenInputField={handleOpenForm}
        openFormStates={{ openForm, handleOpenForm }}
        inputsStates={{ title, setTitle, content, setContent, color, setColor }}
        entriesStates={{
          entries,
          handleAddEntry,
          selectedEntry,
          setSelectedEntry,
        }}
      />
    </>
  );
}

export default NoteApp;
