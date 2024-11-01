import "./App.css";
import Links from "./Components/Links";

function App() {
  return (
    <main className="container">
      <img src="/social-links/Headshot.png" alt="My Headshot" />
      <h1>Robert Horosewski</h1>
      <h2>Nashua, New Hampshire, USA</h2>
      <h3>"Frontend Developer who loves to code!"</h3>
      <Links
        path="https://www.linkedin.com/in/robert-horosewski-8a0608196/"
        title="Visit my LinkedIn Page"
      >
        LinkedIn
      </Links>
      <Links
        path="https://horoserp.github.io/React-Portfolio/"
        title="Visit my Portfolio Page"
      >
        Portfolio
      </Links>
      <Links path="https://github.com/horoserp/" title="Visit my GitHub Page">
        GitHub
      </Links>
      <Links
        path="https://www.frontendmentor.io/profile/horoserp"
        title="Visit my Frontend Mentor Page"
      >
        Frontend Mentor
      </Links>
      <Links
        path="https://stackoverflow.com/users/12617284/horoserp"
        title="Visit my Stack Overflow Page"
      >
        Stack Overflow
      </Links>
    </main>
  );
}

export default App;
