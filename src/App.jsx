import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./components/Pages/Category_Page/CategoryPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryPage />
      <br />
      <Footer />
      <div>This is main body</div>
    </>
  );
}

export default App;
