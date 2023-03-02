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
          <Route path="/" elemnt={<Home/>}/>
          <Route path="galery" elemnt={<Galery/>}/>
          <Route path="project" elemnt={<Project/>}/>
          <Route path="contact" elemnt={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
