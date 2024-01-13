import ListElement from "./ListElement";
import StartMessage from "../elements/startMessage";

function NoteList({ handleVisibilityForm, inputsStates, entriesStates }) {
  const { entries } = entriesStates;
  return (
    <>
      {entries.length === 0 ? (
        <StartMessage />
      ) : (
        entries
          .slice()
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((el) => (
            <ListElement
              element={el}
              key={el.id}
              handleVisibilityForm={handleVisibilityForm}
              inputsStates={inputsStates}
              entriesStates={entriesStates}
            />
          ))
      )}
    </>
  );
}

export default NoteList;
