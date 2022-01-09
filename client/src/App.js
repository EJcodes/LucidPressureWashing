import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav'

function App() {
  return (
    <Router>
      {TopNav()}
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
    </Routes>
    </Router>
  );
}

export default App;
