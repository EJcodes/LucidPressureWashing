import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';

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
