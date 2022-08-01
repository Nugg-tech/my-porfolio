import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/about';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Testemony from './components/testemony/Testemony';

function App() {
  return (
    <>
        <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testemony/>
        <Contact />
      </main>
    </>
  );
}

export default App;
