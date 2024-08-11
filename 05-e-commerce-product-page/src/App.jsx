import "./App.scss";
import Nav from "./components/Nav/Nav";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="container">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}></Nav>
      </header>
      <main>
        <ProductPage></ProductPage>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Overlay></Overlay>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;

// Collections
// Men
// Women
// About
// Contact

// Sneaker Company

// Fall Limited Edition Sneakers

// These low-profile sneakers are your perfect casual wear companion. Featuring a
// durable rubber outer sole, they’ll withstand everything the weather can offer.

// $125.00
// 50%
// $250.00

// 0
// Add to cart
{
  /* <div class="attribution">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
Coded by <a href="#">Your Name Here</a>.
</div> */
}
