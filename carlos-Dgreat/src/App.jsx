import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import MyTechStack from './components/MyTechStack';
import AboutMe from './components/AboutMe';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section id="services">
        <Services />
      </section>

      <div className="space-y-20">
        <section id="about">
          <AboutMe />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="skills">
          <MyTechStack />
        </section>

        <section id="resume">
          <Timeline />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;