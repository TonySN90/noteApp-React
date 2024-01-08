import { createDate } from "../utils";

export default function ListElement({
  entries,
  element,
  selectedEntry,
  onSelectedEntry,
  onOpenInputField,
  setTitle,
  setContent,
  setColor,
}) {
  function handleOpenEntry(id) {
    const filteredEntry = entries.find((el) => el.id === id);
    onSelectedEntry(filteredEntry);
    onOpenInputField();

    setTitle(filteredEntry.title);
    setContent(filteredEntry.content);
    setColor(filteredEntry.color);
  }

  return (
    <div
      className="card__container"
      data-id={element.id}
      onClick={() => handleOpenEntry(element.id)}
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
