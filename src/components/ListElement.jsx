export default function ListElement({ element }) {
  return (
    <div className="card__container" data-id={element.id}>
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
          <div className="card__contentarea-timestamp">{element.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
