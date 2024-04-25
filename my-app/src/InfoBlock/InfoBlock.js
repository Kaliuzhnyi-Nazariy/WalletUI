import ModalWindow from "../modal/modal";

export function InfoBlock() {
  return (
    <main>
      <section>
        <h1>Learn Token</h1>
        <h2>Empower Your Learning</h2>
        <img alt="studying" />
      </section>
      <section>
        <h2 style={{ textTransform: "uppercase" }}>about learn token</h2>
        <p>Unlocking Cryptocurrency Success</p>
        <p>
          In the bustling city of Techville, a team of educators introduced the
          Learn Token, LTK. Acquired through educational activities, LTK opened
          doors to premium content, rewarded contributors, funded scholarships,
          and became a valuable asset for trading. Learners worldwide embraced
          LTK, transforming education into a collaborative, inclusive journey
          fueled by its power.
        </p>
        <ModalWindow />
      </section>
      <footer>
        <h3>Learn Token</h3>
        <p>©Kaliuzhnyi Nazarii. Created in 2024</p>
      </footer>
    </main>
  );
}
