import ListElement from "./ListElement";

export default function List({
  entries,
  selectedEntry,
  onSelectedEntry,
  onOpenInputField,
  setTitle,
  setContent,
  setColor,
}) {
  return (
    <>
      {entries.map((el) => (
        <ListElement
          entries={entries}
          element={el}
          key={el.id}
          selectedEntry={selectedEntry}
          onSelectedEntry={onSelectedEntry}
          onOpenInputField={onOpenInputField}
          setTitle={setTitle}
          setContent={setContent}
          setColor={setColor}
        />
      ))}
    </>
  );
}
