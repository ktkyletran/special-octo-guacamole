import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="bg">
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </div>
  </Router>
  );
}

export default App;
