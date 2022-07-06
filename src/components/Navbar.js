import { Link,useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <Link className="navbar" to="/">
            HOME
          </Link>
          <Link className="navbar" to="/about">
            ABOUT
          </Link>
          <Link className="navbar" to="/contact">
            CONTACT
          </Link>
          <Button variant="outlined" onClick={() => navigate("/signin")}>
            SIGN IN
          </Button>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
