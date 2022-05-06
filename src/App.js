
import './App.css';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
