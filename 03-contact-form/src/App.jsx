import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import ContactUs from "./components/ContactUs";
import { motion, AnimatePresence, usePresence, easeInOut } from "framer-motion";
import Notification from "./components/Notification";

export default function App() {
  const [sent, setSent] = useState(false);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 5000);
  }, [isPresent]);

  const handleClick = () => {
    setSent(false);
  };

  return (
    <>
      <main>
        <AnimatePresence>
          <motion.div
            className="notification"
            key={sent}
            initial={{ opacity: 0, transform: "translateY(-100px)" }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: { duration: 0.5, ease: easeInOut },
            }}
            exit={{
              opacity: 0,
              transform: "translateY(-100px)",
              transition: { duration: 0.5, ease: easeInOut },
            }}
          >
            {sent && <Notification onClick={handleClick}></Notification>}
          </motion.div>
        </AnimatePresence>
        <div className="container">
          <div className="row py-5 px-4">
            <ContactUs setSent={setSent}></ContactUs>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
