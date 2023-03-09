import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import Home from "./Components/Pages/Home";
import Galery from "./Components/Pages/Galery";
import Project from "./Components/Pages/Project";
import Contact from "./Components/Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="galery" element={<Galery/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
