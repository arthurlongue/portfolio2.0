import Typewriter from "typewriter-effect";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      {/* <Aside></Aside> */}
      <Home></Home>
      <About></About>

      <Typewriter
        options={{
          strings: ["Seja bem vindo!", "Desce ai pra conferir meus projetos"],
          autoStart: true,
          loop: true,
          delay: 35,
        }}
      />
    </>
  );
}

export default App;
