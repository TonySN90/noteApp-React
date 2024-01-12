import { useState, useEffect } from "react";
import Header from "./header/Header.jsx";
import NoteList from "./list/NoteList.jsx";
import Form from "./form/Form.jsx";
import Button from "./elements/Button.jsx";
import StartMessage from "./elements/startMessage.jsx";
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
      <Header>
        <Button buttonTyp="plus" handler={handleVisibilityForm} />
      </Header>

      {entries.length === 0 ? (
        <StartMessage />
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
