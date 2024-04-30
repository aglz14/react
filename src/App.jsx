// 1. importacion nombrada
// import { Navbar, array } from "./components/Navbar.jsx";

// 2. importacion por defecto
// 2. import Navbar from "./components/Navbar.jsx";

// 3.
import { Navbar } from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
