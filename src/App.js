import Analytics from "./components/Analytics/Analytics";
import CardsSection from "./components/CardsSection/CardsSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import MoveToTop from "./components/MoveToTop";
import { routes } from "./constants";
import { useEffect, useReducer, useState } from "react";
// import ContactMeModal from "./components/ContactMeModal";
import { contactMeReducer, initialState } from "./reducers/contactMeReducer";

function App() {

  // const [state, dispatch] = useReducer(contactMeReducer, initialState)

  const [showButton, setShowButton] = useState(false);

  // const handleModal = (actionType) => {
  //   console.log("state")
  //   dispatch({ type: actionType, payload: "" })
  // }




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle modal is currently not working commented add the code because now i am confuse do i 
  // have to share my information or not that's why

  return (
    <div>
      <Navbar
      // handleModal={handleModal}
      />
      <HeroSection />
      <Analytics />
      <NewsLetter />
      <CardsSection />
      <Footer />
      <a href={`#${routes.home}`} className={`${showButton ? "block" : "hidden"}`}>
        <div className="fixed right-6 bottom-8 bg-[#00df9a] p-2 rounded-full cursor-pointer hover:scale-105 duration-100">
          <MoveToTop />
        </div>
      </a>

      {/* <ContactMeModal visible={state.isVisible} handleModal={handleModal}/> */}

    </div>

  );
}

export default App;
