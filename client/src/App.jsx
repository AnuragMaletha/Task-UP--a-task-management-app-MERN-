import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';  
import Home from "./home/home"
import Update from "./update/Update"

const App=()=> {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/update" element={<Update />} />
      </Routes>  
    </Router>
  );
    
  
  }; 

export default App
