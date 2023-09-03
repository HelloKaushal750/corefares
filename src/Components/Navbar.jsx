import "../Styles/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Adjust the breakpoint according to your needs
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      id="nav-menu"
      style={{
        backgroundColor: "black",
        borderRadius:"0 0 25px 25px",
        color: "white"
      }}
    >
      {isMobile ? (
        <Mobilemenu />
      ) : (
        <div className="navlink">
          <a className="nav-link home" href="#home">
            HOME
          </a>
          <a className="nav-link about" href="#about">
            ABOUT US
          </a>
          <a className="nav-link projects" href="#projects">
            SERVICES
          </a>
          <a className="nav-link github" href="#githuboverview">
            CAREERS
          </a>
          <a className="nav-link contact" href="#contact">
            CONTACT US
          </a>
        </div>
      )}
      <div
        className="mynamelogo"
        style={{ marginBottom: "-20px", marginTop: "-15px", marginRight:'50px' }}
      >
        <Link
          style={{ color: "white", textDecoration: "none" }}
          className="mynamestyle"
        >
          <h1>
            CORE<span style={{ color: "#30a0db" }}>FARES</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}

function Mobilemenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <button
        className="menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i
          class="fa-solid fa-bars"
          style={{ color: "white", fontSize: "25px" }}
        ></i>
      </button>
      {isOpen && (
        <div className="mobile-menu-links">
          <div>
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              HOME
            </a>
          </div>
          <div>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ABOUT US 
            </a>
          </div>
          <div>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              SERVICES
            </a>
          </div>
          <div>
            <a
              href="#githuboverview"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CAREERS
            </a>
          </div>
          <div>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
