import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNav from "./components/MyNav.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
