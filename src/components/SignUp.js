import { FormControl, Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import { useRef } from "react";
import "../components/Sign.css"
import axios from "axios";
import Navbar from "./Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const onSignUP = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signup",
        data
      );
      // console.log(response);
      if (response.status === 201) {
        alert("User Created");
        navigate("/signin");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={onSignUP}>
        <FormControl>
          <Box
            mt={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow={5}
            width={400}
            gap={2}
            p={5}
          >
            <Typography variant="h5">Sign Up</Typography>
            <TextField
              type="text"
              fullWidth
              variant="filled"
              label="Username"
              size="small"
              inputRef={usernameRef}
              required
            />
            <TextField
              type="email"
              fullWidth
              variant="filled"
              label="Email"
              size="small"
              inputRef={emailRef}
              required
            />
            <TextField
              fullWidth
              type="password"
              variant="filled"
              label="Password"
              size="small"
              inputRef={passwordRef}
              required
            />
              <Button type="submit" variant="contained">
                SIGN UP
              </Button>
              <Link className="link" to="/signin">Sign In</Link>
          </Box>
        </FormControl>
      </form>
    </>
  );
};
export default SignUp;
