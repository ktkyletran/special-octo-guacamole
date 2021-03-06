import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import AuthForm from './pages/AuthForm';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="bg">
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={AuthForm} />
      </div>
    </div>
  </Router>
  );
}

export default App;
