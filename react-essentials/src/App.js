import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import logo from "./logo.svg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s ToDo App!</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <img src={logo} alt="react logo" />
      <ul style={{ textAlign: "left" }}>
        {props.taskList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <h3>Copyright {props.year}</h3>
    </footer>
  );
}

const tasks = ["backend", "frontend", "database"];
const tasksObject = tasks.map((task, i) => ({ id: i, title: task }));

function UnAuthorized() {
  return <h1>Not Authorized!</h1>;
}

function CheckState() {
  const [currentMood, setMood] = useState("Happy");
  useEffect(() => {
    console.log(`It's ${currentMood} around here!`);
  });
  return (
    <>
      <h1>Current Mood is {currentMood}.</h1>
      <button onClick={() => setMood("Frustrated")}>Frustrate</button>
      <button onClick={() => setMood("Excited")}>Excite</button>
    </>
  );
}

function CheckerBox() {
  const [checkState, toggle] = useReducer((checkState) => !checkState, false);
  return (
    <>
      <input type="checkbox" value={checkState} onChange={toggle} />
      <p>{checkState ? "checked" : "unchecked"}</p>
    </>
  );
}

function App(props) {
  return (
    <>
      <Header name="Sagar" />
      {props.authorized ? <Main taskList={tasksObject} /> : <UnAuthorized />}
      <CheckState />
      <CheckerBox />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
