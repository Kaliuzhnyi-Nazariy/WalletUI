import ModalWindow from "../modal/modal";
// import "../scss/main.scss";

export function InfoBlock() {
  return (
    <div className="page">
      <header>
        <span className="logo-text">Learn Token</span>
      </header>
      <main>
        <section>
          <h1 className="main-title">Empower Your Learning Journey</h1>
          <img alt="studying" />
          <span className="text-on-photo">
            Explore the exciting world of educational currencies with us.
          </span>
        </section>
        <section>
          <h2 style={{ textTransform: "uppercase" }} className="second-title">
            about learn token
          </h2>
          <p className="main-text">
            In the bustling city of Techville, a team of educators introduced
            the Learn Token, LTK. Acquired through educational activities, LTK
            opened doors to premium content, rewarded contributors, funded
            scholarships, and became a valuable asset for trading. Learners
            worldwide embraced LTK, transforming education into a collaborative,
            inclusive journey fueled by its power.In the bustling city of
            Techville, a team of educators introduced the Learn Token, LTK.
            Acquired through educational activities, LTK opened doors to premium
            content, rewarded contributors, funded scholarships, and became a
            valuable asset for trading. Learners worldwide embraced LTK,
            transforming education into a collaborative, inclusive journey
            fueled by its power.
          </p>
          <ModalWindow />
        </section>
        <footer>
          <h3 className="main-title">Learn Token</h3>
          <p className="main-text">©Kaliuzhnyi Nazarii. Created in 2024</p>
        </footer>
      </main>
    </div>
  );
}
