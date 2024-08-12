import "./App.scss";
import Nav from "./components/Nav/Nav";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CartProvider } from "./context/cartContext";
import { LightBoxContext } from "./context/lightBoxContext";
import { LightBox } from "./components/LightBox/LightBox";
import { productInfo } from "./productInfo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { lightBox, setLightBox, currentImageId, setCurrentImageId } =
    useContext(LightBoxContext);
  const { image } = productInfo[0];

  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth <= 992) setLightBox(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CartProvider>
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
          {isOpen || lightBox ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Overlay setIsOpen={setIsOpen}></Overlay>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {lightBox && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LightBox
                  currentImageId={currentImageId}
                  image={image}
                  setLightBox={setLightBox}
                ></LightBox>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </CartProvider>
    </>
  );
}

export default App;
