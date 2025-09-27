import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Food from "./food";
import Card from "./card";
import Card2 from "./reusableCard";
import image from "./assets/profile.jpg";
import Button from "./button/button";
import CardProbs from "./cardProbs";
import ProfileCardProbs from "./ProfileCardProbs";
import TestComponent from "./test";
import { useState } from "react"; // Add this import
import ConditionalRender from "./conditionalRender";
import List1 from "./list1";
import List2 from "./list2";
import List3 from "./list3";
import ButtonOnClick from "./button_onclick";
import ButtonOnClickEvent from "./button_onclick_event";
import ButtonUseState from "./ButtonUseState";
import Onchange from "./onChange";

function App() {
  const card_img = "./assets/profile.jpg";
  const [showModal, setShowModal] = useState(false);
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };
  let fruits = [
    { id: 1, name: 5, color: 2, price: "apple" },
    { id: 2, name: "Banana", color: "Yellow", price: "asas" },
    { id: 3, name: "Cherry", color: "Red", price: 120 },
    { id: 4, name: "Date", color: "Brown", price: 150 },
    { id: 5, name: "Elderberry", color: "Purple", price: 200 },
  ];
  return (
    <>
      {/* Only render modal if showModal is true */}
      {showModal && (
        <TestComponent
          title="omar salem"
          onClose={closeModal} // Pass the close function
          children={<p>This is some content for the modal!</p>}
        />
      )}
      <Header />
      <ConditionalRender name="ali" isloggedin={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: "10px 20px",
            margin: "20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Open Modal
        </button>
        <Card />
        <Card2
          title="Card Title 1"
          description="This is a description for card 1."
          image={image}
        />
        <Card2
          title="Card Title 2"
          description="This is a description for card 2."
          image={image}
        />
        <Card2
          title="Card Title 3"
          description="This is a description for card 3."
          image={image}
        />
        <Card2
          title="Card Title 4"
          description="This is a description for card 4."
          image={image}
        />
        <CardProbs name="Omar Salem" age={20} isStudent={true} />
        <ProfileCardProbs
          avatar="https://randomuser.me/api/portraits/lego/1.jpg"
          name="Omar Salem"
          role="Web Developer"
          bio="Passionate about React, networking, and building modern web apps."
        />
      </div>

      <List1 />
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <List2 />
      </div>

      <Food />
      <ButtonOnClick />
      <ButtonOnClickEvent />
      <ButtonUseState />
      <Onchange />
      <Footer />
      {fruits.length > 0 && <List3 items={fruits} category={"Fruits"} />}
    </>
  );
}

export default App;
