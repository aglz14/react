import Footer from "./components/Footer.jsx";

// 1. importacion nombrada
// import { Navbar, array } from "./components/Navbar.jsx";

// 2. importacion por defecto
// 2. import Navbar from "./components/Navbar.jsx";

// 3.
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
    </div>
    <div>
      <Footer />
    </div>
  );
}

export default App;
