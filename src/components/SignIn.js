import { FormControl, Box, TextField, Typography, Button } from "@mui/material";
import { useRef } from "react";
import { useNavigate,Link } from "react-router-dom";
import "../components/Sign.css"
import axios from "axios";
import Navbar from "./Navbar";

const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const onSignIN = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signin",
        data
      );
      // console.log(response);
      if (response.status === 200) {
        // console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        // localStorage.setItem("userDetail",response.data.user.username);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <form onSubmit={onSignIN}>
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
            <Typography variant="h5">Sign In</Typography>
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
            {/* <Box display="flex" flexDirection="row"> */}
              <Button type="submit" variant="contained">
                SIGN IN
              </Button>
              <Link className="link" to="/signup">Sign Up</Link>
            {/* </Box> */}
          </Box>
        </FormControl>
      </form>
    </>
  );
};
export default Signin;
