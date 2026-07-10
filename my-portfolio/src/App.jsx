import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ChatBubble from "./components/ChatBubble";
import Icon from "./components/Icon";
import flowerPattern from "./assets/flowerPattern.png";
import "./App.css";
import Footer from "./layout/Footer";

// add components to connect the sections to the app
function App() {
    return (
        <>
        <Navbar />
        <main>
            <Hero />
            <ChatBubble />
            <div className="heroDivider" />
            <About />
            <div className="divider" />
            <Skills />
            <div className="divider" />
            <Projects />
            <div className="divider" />
            <Contact />

        </main>
        <Footer />
        </>
    );
}

export default App;