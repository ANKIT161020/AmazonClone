import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import CategoryCard from "./components/CategoryCard/CategoryCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard />
      <div>This is main body</div>
    </>
  );
}

export default App;
