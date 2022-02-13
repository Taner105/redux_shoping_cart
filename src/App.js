import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
