import ListElement from "./ListElement";

export default function List({ handleOpenForm, inputsStates, entriesStates }) {
  const { entries } = entriesStates;
  return (
    <>
      {entries
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((el) => (
          <ListElement
            element={el}
            key={el.id}
            handleOpenForm={handleOpenForm}
            inputsStates={inputsStates}
            entriesStates={entriesStates}
          />
        ))}
    </>
  );
}
