import "./Notes.css";
const Notes = ({ item }) => {
  return (
    <>
      <div className="notes-card">
        <h3 className="note-title">{item.title}</h3>
        <div className="h-line"/>
        <p className="note-description">{item.description}</p>
      </div>
    </>
  );
};
export default Notes;
