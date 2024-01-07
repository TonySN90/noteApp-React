import ListElement from "./ListElement";

export default function List({ outputData }) {
  return (
    <>
      {outputData.map((el) => (
        <ListElement element={el} key={el.id} />
      ))}

      <section id="cards">
        <div className="info__text hidden">
          Es ist noch keine Notiz vorhanden. Erstelle doch gleich einen Eintrag!
        </div>
      </section>
    </>
  );
}
