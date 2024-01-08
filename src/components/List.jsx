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
  const test = [5, 16, 8, 897, 3];
  const data = [
    {
      title: "1",
      content: "1",
      color: "#eb4d4b",
      timestamp: 1704751620068,
      id: "7a0f6298-c2ab-4e90-a160-549d70be0ccf",
    },
    {
      title: "2",
      content: "2",
      color: "#eb4d4b",
      timestamp: 1704751648651,
      id: "e0f82f0d-d2e6-4e14-bef7-4c85a60df08a",
    },
    {
      title: "3",
      content: "3",
      color: "#eb4d4b",
      timestamp: 1704751652989,
      id: "97402565-7eaf-463d-be0f-5529720b18df",
    },
  ];

  return (
    <>
      {entries
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((el) => (
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
