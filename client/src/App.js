import './App.css';
import './Checkmark.css';
import Home from './Components/Home';
import { Route, Routes } from "react-router-dom";
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
