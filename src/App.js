import "./App.css";
import ClassButton from "./components/1_paskaita/ClassButton";
import ClassDiv from "./components/1_paskaita/ClassDiv";
import FuncButton from "./components/1_paskaita/FuncButton";
import FuncDiv from "./components/1_paskaita/FuncDiv";

function App() {
  return (
    <div className="App">
      <FuncButton title="Submit" />
      <FuncButton title="Cancel" />
      <FuncButton title="Refresh" />
      <ClassButton title="Class button" />
      <FuncDiv
        title="Game Pass"
        paragraph="Join gaming world only for 4.99$ per month"
        btnName="Subscribe"
      />

      <ClassDiv
        title="Class Div"
        paragraph="This is class component"
        btnName="Test"
      />
    </div>
  );
}

export default App;
