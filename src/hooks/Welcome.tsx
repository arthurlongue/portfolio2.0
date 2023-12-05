import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <div className="py-20 text-3xl">
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
