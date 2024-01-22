import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import CategoryPage from "./components/Pages/Category_Page/CategoryPage";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryPage />
      <div>This is main body</div>
    </>
  );
}

export default App;
