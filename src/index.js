import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";

const List = [
  {
      id:1,
    name: "Camila Terry",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    avatar: "50",
    gender: "women"
  },
  {
    id:2,
    name: "Joel Williamson",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    avatar: "42",
    gender: "men"
  },

  {
    id:3,
    name: "Deann Payne",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    avatar: "67",
    gender: "men"
  },
  {
    id:4,
    name: "Leona Hunter",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    avatar: "50",
    gender: "women"
  },
  {
    id:5,
    name: "Donald Perkins",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    avatar: "89",
    gender: "women"
  }
];

const App = () => {
  return (
    <section className="row-section">
      <div className="container">
        <Header />
        <ContactList ContactList={List} />
      </div>
    </section>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
