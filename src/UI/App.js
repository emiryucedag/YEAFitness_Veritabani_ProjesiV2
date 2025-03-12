import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from "./Login";
import Home from "./Home";
import Program from "./Program";
import PersonalInformation from "./PersonalInformation";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/personal-information" element={<PersonalInformation />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/program/:id" element={<Program />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
