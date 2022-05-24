import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";
import reactImg from "./logo192.png";

// Prop exercises

// 1- AddressLabel Component
function AddressLabel({ person }) {
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.address}</div>
    </div>
  );
}

// 2- Envelope component
function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <div className="receiver">
        <AddressLabel person={toPerson} />
      </div>
      <div className="sender">
        <AddressLabel person={fromPerson} />
      </div>
      <div className="stamp">
        <p className="stampText">STAMP</p>
      </div>
    </div>
  );
}

const person1 = {
  name: "Mr. Receiver",
  address: "123 Fake St. Boston, MA 02118",
};

const person2 = {
  name: "Mr. Sender",
  address: "12 London Street, UK",
};

// ReactDOM.render(
//   <Envelope toPerson={person1} fromPerson={person2} />,
//   document.querySelector("#root")
// );

// 3- Credit Card component
const CreditCard = ({ cardInfo }) => (
  <div className="card">
    <div className="bank">{cardInfo.bankName}</div>
    <div className="name">{cardInfo.name}</div>
    <div className="expiry">
      <p className="valid">VALID</p>
      <p className="thru"> THRU</p>
      {cardInfo.expDate}
    </div>
    <div className="cardNumber">{cardInfo.cardNumber}</div>
  </div>
);

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    bankName: PropTypes.string,
    name: PropTypes.string,
    expDate: PropTypes.string,
    cardNumber: PropTypes.string,
  }).isRequired,
};

const cardDetail = {
  bankName: "Big Bank, Inc.",
  name: "CARDHOLDER NAME",
  expDate: "08/19",
  cardNumber: "1234 5678 8765 4321",
};

// ReactDOM.render(
//   <CreditCard cardInfo={cardDetail} />,
//   document.querySelector("#root")
// );

//4. Poster component
function Poster({ posterData }) {
  const { image, title, text } = posterData;
  return (
    <div className="poster">
      <div className="image">
        <img src={image} alt="Test img" />
      </div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  );
}

const posterDetails = {
  image: reactImg,
  title: "REACT",
  text: "The best thing since jQuery, probably.",
};

ReactDOM.render(
  <Poster posterData={posterDetails} />,
  document.querySelector("#root")
);
