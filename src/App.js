import './styles/main.css';
import {Navbar} from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
   return (
      <div className="App">

            <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='projects' element={<Projects/>}/>
               <Route path='project' element={<Project/>}/>
               <Route path='contacts' element={<Contacts/>}/>
            </Routes>
            <Footer/>

      </div>
   );
}

export default App;
