import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Zoos />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Save Endangered Species in Indian Zoos</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#zoos">Zoos</a>
        <a href="#contact">Donate</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h2>Protect India's Endangered Wildlife</h2>
      <p>Your contribution can save countless lives and secure their future.</p>
      <button onClick={() => alert("Thank you for your support!")}>
        Donate Now
      </button>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content">
      <h2>About the Initiative</h2>
      <p>
        Indian zoos play a vital role in protecting endangered species through
        breeding programs, habitat conservation, and public awareness. By
        donating, you directly support these efforts and help secure a better
        future for these animals.
      </p>
    </section>
  );
}

function Zoos() {
  const zooList = [
    {
      img src:{bengal tiger.jpg} ",
      alt: "Bengal Tiger",
      name: "Sundarbans Tiger Reserve, West Bengal",
      description: "Home to the majestic Bengal Tiger and other rare species.",
      donateMessage: "Donated to Sundarbans Tiger Reserve!",
    },
    {
      img src:{asiatic location.jpg},
      alt: "Asiatic Lion",
      name: "Indira Gandhi Zoological Park, Andhra Pradesh",
      description: "Conserves species like Asiatic Lions and Indian Elephants.",
      donateMessage: "Donated to Indira Gandhi Zoo!",
    },
    {
      img src:{Red Panda.jpg},
      alt: "Red Panda",
      name: "Padmaja Naidu Himalayan Zoo, West Bengal",
      description: "Renowned for conserving Red Pandas and Snow Leopards.",
      donateMessage: "Donated to Padmaja Naidu Zoo!",
    },
  ];

  return (
    <section id="zoos" className="content">
      <h2>Zoos Across India</h2>
      <div className="zoo-list">
        {zooList.map((zoo, index) => (
          <Zoo
            key={index}
            img={zoo.img}
            alt={zoo.alt}
            name={zoo.name}
            description={zoo.description}
            donateMessage={zoo.donateMessage}
          />
        ))}
      </div>
    </section>
  );
}

function Zoo({ img, alt, name, description, donateMessage }) {
  return (
    <div className="zoo">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => alert(donateMessage)}>Donate</button>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="content">
      <h2>Make a Difference</h2>
      <p>Your donations go directly towards conservation programs, veterinary care, and habitat improvement.</p>
      <p>Email: <a href="mailto:donate@endangeredzoos.org">donate@endangeredzoos.org</a></p>
      <p>Phone: +91-9876543210</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 Endangered Species Initiative</p>
      <p>
        Follow us on
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>,
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>,
        and <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>.
      </p>
    </footer>
  );
}

export default App;


