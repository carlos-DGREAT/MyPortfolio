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
      <Banner />
      <Services />

      <div className="space-y-20">
        <AboutMe />
        <Portfolio />
        <MyTechStack />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
