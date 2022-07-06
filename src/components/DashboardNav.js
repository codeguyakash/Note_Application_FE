import { Link, useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
const DashboardNav = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <Link className="navbar" to="/dashboard">
            ALL NOTE
          </Link>
          <Link className="navbar" to="/createnote">
            CREATE
          </Link>
          <Button variant="outlined" onClick={signOut}>Log Out</Button>
        </nav>
      </div>
    </>
  );
};
export default DashboardNav;
