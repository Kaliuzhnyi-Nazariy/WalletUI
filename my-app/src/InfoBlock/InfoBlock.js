import ModalWindow from "../modal/modal";
// import "../scss/main.scss";

export function InfoBlock() {
  return (
    <div>
      <div className="head">
        <header>
          <span className="logo-text">Learn Token</span>
        </header>
        <section className="page">
          <h1 className="main-title">Empower Your Learning Journey</h1>
          <div className="text-under-photo">
            <img
              src="https://img.freepik.com/free-photo/workplace-office-with-laptop-coffee-dark-room-night_169016-47422.jpg?t=st=1714293963~exp=1714297563~hmac=9ebcb59acb1804ed013ed040d84950265c285eea8041f1304a7f0ca77f5d78a1&w=1380"
              alt="studying"
              className="photo-style"
            />
            <span className="text-on-photo">
              Explore the exciting world of educational currencies with us.
            </span>
          </div>
        </section>
      </div>
      <main>
        <section className="main-info">
          <h2 className="second-title">about learn token</h2>
          <p className="main-text ">
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
      </main>
      <footer>
        <h3 className="main-title">Learn Token</h3>
        <p className="footer-text">©Kaliuzhnyi Nazarii. Created in 2024</p>
      </footer>
    </div>
  );
}
