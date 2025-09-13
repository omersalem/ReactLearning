import card_img from "./assets/profile.jpg";

function Card() {
  return (
    <div className="bg-black/20 backdrop-blur-md max-w-md h-auto shadow-amber-100 border border-black/10 shadow-lg rounded-lg text-black p-6 m-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl">
      <img className=" rounded-4xl mb-2" src={card_img} alt="Card Image" />
      <h2 className="font-bold text-xl mb-2">Omar Salem</h2>
      <p className="text-md">
        Computer Engineer working in ministry of national economy and
        development.
      </p>
    </div>
  );
}

export default Card;
