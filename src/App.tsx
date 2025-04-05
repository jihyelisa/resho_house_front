import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EventDetail from "./pages/EventDetail";
import EventUpload from "./pages/EventUpload";
import { useState } from "react";
import Profile from "./pages/Profile";

interface AnimatedRoutesProps {
  setIsSignedIn: (value: boolean) => void;
}

const AnimatedRoutes = ({ setIsSignedIn }: AnimatedRoutesProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/events"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EventList />
            </motion.div>
          }
        />
        <Route
          path="/signin"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SignIn setIsSignedIn={setIsSignedIn} />
            </motion.div>
          }
        />
        <Route
          path="/signup"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SignUp />
            </motion.div>
          }
        />
        <Route
          path="/eventdetail/:paramEventId"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EventDetail />
            </motion.div>
          }
        />
        <Route
          path="/eventupload"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EventUpload />
            </motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Profile setIsSignedIn={setIsSignedIn} />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen h-full w-full items-center">
        <Navbar isSignedIn={isSignedIn} />
        <div className="w-[900px] h-full flex flex-col flex-grow justify-center">
          <AnimatedRoutes setIsSignedIn={setIsSignedIn} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
