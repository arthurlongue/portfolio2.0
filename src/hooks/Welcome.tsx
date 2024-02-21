import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <div className="py-20 text-3xl">
      <h1 className="text-3xl xs:text-6xl px-8">Site em contrução...</h1>
      <br />
      <br />
      <Typewriter
        options={{
          strings: [
            "Seja bem vindo!",
            "Esse é meu portfólio",
            "Desce ai pra conferir meus projetos",
          ],
          autoStart: true,
          loop: true,
          delay: 35,
        }}
      />
    </div>
  );
}

export default Welcome;
