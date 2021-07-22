import Navbar from './Components/NavBar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import {About} from "./Components/About/About"
import { Projects } from './Components/Projects/Projects';
import { Blogs } from './Components/Blogs/Blogs';
import { Contact } from './Components/Contact/Contact';
import {Scrollbar} from 'smooth-scrollbar-react';

function App() {
  return (
    <div>
      <Scrollbar renderByPixels={true}>
        <Portfolio />
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </Scrollbar>
      <Navbar />
    </div>
  );
}

export default App;
