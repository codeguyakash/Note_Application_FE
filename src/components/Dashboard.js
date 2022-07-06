import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "./Notes";
import DashboardNav from "./DashboardNav";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cmFqQGdtYWlsLmNvbSIsImlkIjoiNjJiZDM4NDFjNGViOTZhNzIwMjkzMDUzIiwiaWF0IjoxNjU3MTI4MzM1fQ.Ov8g5K47tS1qWusT7Iu9Zymy19fa5G__TpjW8neBE0Y";

  useEffect(() => {
    axios
      .get("http://localhost:5000/note/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setNotes(res.data));
  }, []);
  console.log(notes);
  return (
    <>
    <DashboardNav/>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Notes item={note} key={note._id} />
      ))}
    </>
  );
};
export default Home;
