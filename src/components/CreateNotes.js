import { FormControl, Box, TextField, Typography, Button } from "@mui/material";
import { useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const CreateNotes = () => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cmFqQGdtYWlsLmNvbSIsImlkIjoiNjJiZDM4NDFjNGViOTZhNzIwMjkzMDUzIiwiaWF0IjoxNjU3MTI4MzM1fQ.Ov8g5K47tS1qWusT7Iu9Zymy19fa5G__TpjW8neBE0Y";

  const CreateNote = (event) => {
    event.preventDefault();
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    axios
      .post("http://localhost:5000/note/", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => console.log(response.data));

    // console.log(data1);
  };
  return (
    <>
      <Navbar />
      <form onSubmit={CreateNote}>
        <FormControl>
          <Box
            m={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow={5}
            width={400}
            gap={2}
            p={5}
          >
            <Typography variant="h4">Create Notes</Typography>
            <TextField
              type="text"
              fullWidth
              variant="filled"
              label="Title"
              size="small"
              inputRef={titleRef}
              required
            />
            <TextField
              type="text"
              fullWidth
              variant="filled"
              label="Description"
              multiline
              rows={4}
              size="small"
              inputRef={descriptionRef}
              required
            />

            <Button type="submit" variant="outlined">
              CREATE
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
};
export default CreateNotes;
