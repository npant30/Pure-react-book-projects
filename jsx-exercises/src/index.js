import React from "react";
import ReactDOM from "react-dom";

function MyThing() {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-345678-910</li>
      </ul>

      <div>Newline Test</div>
      <div>Empty Newlines Here</div>
      <div>&nbsp;Non-breaking &nbsp;Spaces&nbsp;</div>
      <div>Line1 Line2</div>
    </div>
  );
}

function SecondComponent() {
  return React.createElement(
    "div",
    {},
    React.createElement("div", {}, "The", "Title")
  );
}

function Greeting() {
  //   let userName = "root";
  //   let userName = undefined;
  //   let userName = null;
  let userName = false;
  return (
    <div>
      <span>{userName ? `Hello, ${userName}` : "Not logged in"}</span>
    </div>
  );
}

function Data() {
  return (
    <>
      <td>Col 1</td>
    </>
  );
}

function Table() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <Data />
            <Data />
            <Data />
          </tr>
        </tbody>
      </table>
    </>
  );
}

ReactDOM.render(<Table />, document.querySelector("#root"));
