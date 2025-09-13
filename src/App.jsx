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

function App() {
  const card_img = "./assets/profile.jpg";
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
      <Food />
      <Footer />
    </>
  );
}

export default App;
