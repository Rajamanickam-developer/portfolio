import Main from "./components/body/body.component";
import Header from "./components/header/header.component";
import headerstyle from "./components/header/header.component.css"
import bodystyle from "./components/body/body.component.css"
import Footer from "./components/footer/footer.component";
import footerstyle from "./components/footer/footer.component.css";
import About from "./components/about/about.component";
import aboutstyle from "../src/components/about/about.component.css"


function App() {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
