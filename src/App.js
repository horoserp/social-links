import "./App.css";
import Links from "./Components/Links";

function App() {
  return (
    <div className="container">
      <img src="/social-links/Headshot.png" alt="My Headshot" />
      <h1>Robert Horosewski</h1>
      <h2>Nashua, New Hampshire, USA</h2>
      <h3>"Frontend Developer who loves to code!"</h3>
      <Links path="https://www.linkedin.com/in/robert-horosewski-8a0608196/">
        LinkedIn
      </Links>
      <Links path="https://horoserp.github.io/React-Portfolio/">
        Portfolio
      </Links>
      <Links path="https://github.com/horoserp/">GitHub</Links>
      <Links path="https://www.frontendmentor.io/profile/horoserp">
        Fronted Mentor
      </Links>
      <Links path="https://stackoverflow.com/users/12617284/horoserp">
        Stack Overflow
      </Links>
    </div>
  );
}

export default App;
