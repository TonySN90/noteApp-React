import { useState } from "react";
import Button from "../elements/Button";
import ButtonsGroup from "../form/ButtonsGroup.jsx";
import InputTitle from "./InputTitle";
import InputTextarea from "./inputTextarea";
import InputColor from "./InputColor";
import Alert from "../elements/Alert";

function Form({ openFormStates, inputsStates, entriesStates }) {
  const { visibilityForm, handleVisibilityForm } = openFormStates;
  const { title, content, color, setTitle, setContent, setColor } =
    inputsStates;
  const { entries, adjustEntries, selectedEntry, setSelectedEntry } =
    entriesStates;

  const [alertMessage, setAlertMessage] = useState("");
  const [alertOpacity, setAlertOpacity] = useState(0);
  const isSelected = Object.keys(selectedEntry).length !== 0;
  const filteredEntries = entries.filter((entry) => entry !== selectedEntry);

  function closeForm(e) {
    e.preventDefault();
    handleVisibilityForm();
    setTitle("");
    setContent("");
    setSelectedEntry({});
  }

  function handleStore(e) {
    e.preventDefault();

    const pattern = /^\s*$/;

    if (pattern.test(title)) {
      showAlert("Gib einen gültigen Titel ein");
    } else if (pattern.test(content)) {
      showAlert("Gib eine gültige Notiz ein");
    } else {
      const newEntry = {
        title,
        content,
        color,
        timestamp: Date.now(),
        id: crypto.randomUUID(),
      };

      adjustEntries(
        isSelected
          ? [...filteredEntries, { ...newEntry, id: selectedEntry.id }]
          : [...entries, newEntry]
      );

      closeForm(e);
    }

    function showAlert(message) {
      setAlertMessage(message);
      setAlertOpacity(1);
      setTimeout(() => {
        setAlertOpacity(0);
      }, 2500);
    }
  }

  function handleDelete(e) {
    adjustEntries([...filteredEntries]);
    closeForm(e);
  }

  return (
    <form id="form" className={visibilityForm ? "form-open" : "form-close"}>
      <InputTitle titleInput={title} onTitleInput={setTitle} />
      <InputTextarea textInput={content} onTextInput={setContent} />
      <ButtonsGroup>
        <Button buttonTyp="arrow-left" handler={closeForm} />
        <Button buttonTyp="download" handler={handleStore} />
        {isSelected && <Button buttonTyp="trash" handler={handleDelete} />}
        <InputColor color={color} onColor={setColor} />
      </ButtonsGroup>
      <Alert message={alertMessage} opacityValue={alertOpacity} />
    </form>
  );
}

export default Form;
