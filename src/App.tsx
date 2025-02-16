import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Upload from "./pages/Upload";
// import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full items-center">
        <Navbar />
        <div className="w-3/5 flex flex-grow items-center justify-center bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
