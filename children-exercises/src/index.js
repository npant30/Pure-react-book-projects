import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaExclamationTriangle } from "react-icons/fa";
import PropTypes from "prop-types";

//Exercise 1
function ErrorBox({ children }) {
  return (
    <div className="mainBox">
      <FaExclamationTriangle className="icon" />
      <p>{children}</p>
    </div>
  );
}

// ReactDOM.render(
//   <ErrorBox>Something has gone wrong</ErrorBox>,
//   document.querySelector("#root")
// );

//Exercise 2
//2(a)
function FirstChildOnly({ children }) {
  let items = React.Children.toArray(children);
  return <div>{items[0]}</div>;
}

FirstChildOnly.propTypes = {
  children: PropTypes.node,
};

// ReactDOM.render(
//   <FirstChildOnly>
//     <p>First item</p>
//     <p>Second item</p>
//   </FirstChildOnly>,
//   document.querySelector("#root")
// );

//2(b)
function LastChildOnly({ children }) {
  let items = React.Children.toArray(children);
  return <div>{items[items.length - 1]}</div>;
}

// ReactDOM.render(
//   <LastChildOnly>
//     <p>First item</p>
//     <p>Second item</p>
//     <p>Third item</p>
//   </LastChildOnly>,
//   document.querySelector("#root")
// );

//2(c)
function Head({ num, children }) {
  let items = React.Children.toArray(children);
  items.splice(num, items.length - num);
  return <div> {items}</div>;
}

// ReactDOM.render(
//   <Head num={5}>
//     <p>First item</p>
//     <p>Second item</p>
//     <p>Third item</p>
//     <p>Fourth item</p>
//     <p>fifth item</p>
//     <p>sixth item</p>
//   </Head>,
//   document.querySelector("#root")
// );

//2(d)
function Tail({ num, children }) {
  let items = React.Children.toArray(children);
  items.splice(0, items.length - num);
  return <div>{items}</div>;
}

// ReactDOM.render(
//   <Tail num={3}>
//     <p>First item</p>
//     <p>Second item</p>
//     <p>Third item</p>
//     <p>Fourth item</p>
//     <p>fifth item</p>
//     <p>sixth item</p>
//   </Tail>,
//   document.querySelector("#root")
// );

//Exercise 3
function Dialog({ children }) {
  return <div>{children}</div>;
}

Dialog.propTypes = {
  children: PropTypes.node,
};

function Title({ children }) {
  return (
    <div className="title">
      <h2>{children}</h2>
    </div>
  );
}

function Body({ children }) {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
}

function Footer({ children }) {
  return (
    <div>
      <button type="submit" value={children}>
        {children}
      </button>
    </div>
  );
}

ReactDOM.render(
  <Dialog>
    <Title> This is important</Title>
    <Body>Here is some important text or error or something</Body>
    <Footer>Close</Footer>
  </Dialog>,
  document.querySelector("#root")
);
