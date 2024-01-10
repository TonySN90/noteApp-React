import { useState } from "react";
import Header from "./header/Header.jsx";
import List from "./list/List.jsx";
import Form from "./form/Form.jsx";

function NoteApp() {
  const [entries, setNewEntry] = useState([]);
  const [visibilityForm, setVisibilityForm] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#eb4d4b");

  function handleVisibilityForm() {
    setVisibilityForm((size) => (size === 0 ? 80 : 0));
  }

  function adjustEntries(entry) {
    setNewEntry(entry);
  }

  return (
    <>
      <Header handleVisibilityForm={handleVisibilityForm} />

      {entries.length === 0 ? (
        <div className="info__text">
          Es ist noch keine Notiz vorhanden. Erstelle doch gleich einen Eintrag!
        </div>
      ) : (
        <List
          handleVisibilityForm={setVisibilityForm}
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
