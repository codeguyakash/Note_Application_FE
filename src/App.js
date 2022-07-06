// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import CreateNotes from "./components/CreateNotes";
import RequireAuth from "./components/Auth/RequireAuth";
import PublicAuth from "./components/Auth/PublicAuth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createnote" element={<CreateNotes />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
