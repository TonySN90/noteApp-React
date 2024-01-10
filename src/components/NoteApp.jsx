import { useState, useEffect } from "react";
import Header from "./header/Header.jsx";
import NoteList from "./list/NoteList.jsx";
import Form from "./form/Form.jsx";
import { getListFromStorage, safeToLocalStorage } from "../utils.jsx";
import { DEFAULT_COLOR } from "../config.jsx";

function NoteApp() {
  const [entries, setNewEntry] = useState([]);
  const [visibilityForm, setVisibilityForm] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState(DEFAULT_COLOR);

  useEffect(() => {
    getListFromStorage(setNewEntry);
  }, []);

  function handleVisibilityForm() {
    setVisibilityForm((open) => !open);
  }

  function adjustEntries(entry) {
    setNewEntry(entry);
    safeToLocalStorage(entry);
  }

  return (
    <>
      <Header handleVisibilityForm={handleVisibilityForm} />

      {entries.length === 0 ? (
        <div className="info__text">
          Es ist noch keine Notiz vorhanden. Erstelle doch gleich einen Eintrag!
        </div>
      ) : (
        <NoteList
          handleVisibilityForm={handleVisibilityForm}
          inputsStates={{ setTitle, setContent, setColor }}
          entriesStates={{ entries, setSelectedEntry }}
        />
      )}

      <Form
        openFormStates={{ visibilityForm, handleVisibilityForm }}
        inputsStates={{ title, setTitle, content, setContent, color, setColor }}
        entriesStates={{
          entries,
          adjustEntries,
          selectedEntry,
          setSelectedEntry,
        }}
      />
    </>
  );
}

export default NoteApp;
