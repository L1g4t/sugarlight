import './App.css'
import About from './AboutMe.jsx'
import Sample from './Sample.jsx'
import Price from './Price.jsx'
import Contact from './Contact.jsx'

function App() {
  const scrollToAbout = () => {
    const section = document.getElementById("About");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSample = () => {
    const section = document.getElementById("Sample");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPrice = () => {
    const section = document.getElementById("Price");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const section = document.getElementById("Contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header>
        <img src='/logo/SL_Logo2(1)(1).png' alt='Logo' className="logo" />
        <div className="dropdown">
          <img src='/icon/more.png' alt='Menu' className="dropbtn"/>
          <div className="dropdown-content">
            <a id='AM' onClick={scrollToAbout} style={{ cursor: "pointer" }}>About Me</a>
            <a id='S' onClick={scrollToSample} style={{ cursor: "pointer" }}>Sample</a>
            <a id='P' onClick={scrollToPrice} style={{ cursor: "pointer" }}>Price</a>
            <a id='C' onClick={scrollToContact} style={{ cursor: "pointer" }}>Contact</a>
          </div>
        </div>
      </header>
      <main>
        <div id='About'></div>
        <About />
        <div className='slash'></div>
        <div id='Sample'></div>
        <Sample />
        <div className='slash'></div>
        <div id='Price'></div>
        <Price />
        <div className='slash'></div>
        <div id='Contact'></div>
        <Contact />
        <div className='slash'></div>
      </main>
    </>
  )
}

export default App
