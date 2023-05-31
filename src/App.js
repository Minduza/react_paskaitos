import Hero from "../../react_2paskaita/src/components/Hero";
import "./App.css";
// import ClassButton from "./components/1_paskaita/ClassButton";
// import ClassDiv from "./components/1_paskaita/ClassDiv";
// import FuncButton from "./components/1_paskaita/FuncButton";
// import FuncDiv from "./components/1_paskaita/FuncDiv";
// import Greetings from "./components/2_paskaita/Greetings";
// import Avatar from "./components/2_paskaita/Avatar";
// import Card from "./components/2_paskaita/Card";
import Products from "./components/3_paskaita/Products";

function App() {
  return (
    <div className="App">
      {/* Pirma paskaita */}

      {/* <FuncButton title="Submit" />
      <FuncButton title="Cancel" />
      <FuncButton title="5" />
      <ClassButton title="Class button" />
      <FuncDiv
        title="Game Pass"
        paragraph="Join gaming world only for 4.99$ per month"
        btnName="Subscribe"
      />
      <ClassDiv
        title="Class Div"
        paragraph="This is class component"
        btnName={5}
      /> */}

      {/* Antra paskaita */}

      {/* <Greetings name="Mindaugas" />
      <div>
        <Card
          imageUrl="https://a-z-animals.com/media/2022/01/shutterstock_1761501122-1-1024x614.jpg"
          title="Lizard"
          subtitle="Lizards are a widespred group of reptiles, with over 6,000 species, ranging across all continents expept Antarctica"
          alt="Picture of lizard"
        />
        <Card
          imageUrl="https://www.lesanimauxdumonde.fr/wp-content/uploads/2023/01/colibri-oiseau-bec-fleur-nectar.jpg"
          title="Colibri"
          subtitle="The colibri bird, also known as the hummingbird, is a small, agile creature known for its vibrant plumage and rapid wing movements. It feeds on nectar and is found in the Americas."
          alt="Picture of colibri"
        />
      </div>
      <div>
        <Avatar name="Mindaugas Purvis" color="red" />
        <Avatar name="Tomas Lokys" color="green" />
        <Avatar name="Justas Moka" color="purple" />
      </div> */}

      {/* 3 paskaita */}
      <h1 className="title">BEST SELERS</h1>
      <Products />
    </div>
  );
}

export default App;
