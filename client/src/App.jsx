import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Heatmap from "./components/Heatmap";
import Info from "./components/Info";
import Interests from "./components/Interests";
import ProfessionalInfo from "./components/ProfessionalInfo";
import Pw from "./components/Pw";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMe />
      {/* <Heatmap /> */}
      <Info />
      <ProfessionalInfo />
      <Pw />
      <Interests />
    </div>
  );
}

export default App;
