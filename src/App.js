import Navbar from './Components/NavBar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import {About} from "./Components/About/About"
import { Projects } from './Components/Projects/Projects';
import { Blogs } from './Components/Blogs/Blogs';
import { Contact } from './Components/Contact/Contact';
import {Scrollbar} from 'smooth-scrollbar-react';
import { Skills } from './Components/Skills/Skills';
// import styles from "../src/Components/BottomBanner/Banner.module.css"
import { Banner } from './Components/BottomBanner/Banner';

function App() {
  return (
    <div>
      <Scrollbar renderByPixels={true}>
        <Portfolio />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </Scrollbar>
      <Navbar />
      <Banner />
      {/* <div >
        <span>Created by Vinesh Nair</span>
      </div> */}
    </div>
  );
}

export default App;
