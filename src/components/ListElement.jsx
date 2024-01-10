import { createDate } from "../utils";

export default function ListElement({
  element,
  handleVisibilityForm,
  inputsStates,
  entriesStates,
}) {
  const { setTitle, setContent, setColor } = inputsStates;
  const { entries, setSelectedEntry } = entriesStates;

  function handleSelectedEntry(id) {
    const filteredEntry = entries.find((el) => el.id === id);
    setSelectedEntry(filteredEntry);
    handleVisibilityForm();

    setTitle(filteredEntry.title);
    setContent(filteredEntry.content);
    setColor(filteredEntry.color);
  }

  return (
    <div
      className="card__container"
      data-id={element.id}
      onClick={() => handleSelectedEntry(element.id)}
    >
      <div className="card__wrapper">
        <div
          className="card__wrapper-colorstrip"
          style={{ backgroundColor: element.color }}
        ></div>
        <div className="card__wrapper-contentarea">
          <h2 className="card__contentarea-title truncation">
            {element.title}
          </h2>
          <div className="card__contentarea-content truncation">
            {element.content}
          </div>
          <div className="card__contentarea-timestamp">
            {createDate(element.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}
