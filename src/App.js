
import './App.css';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddItem from './Pages/AddItem/AddItem';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
      <Route path='/items/:ItemId' element={<ItemDetail></ItemDetail>}></Route>
      <Route path="/Inventory" element={<ManageInventories></ManageInventories>}></Route>
      <Route path="/AddItem" element={<AddItem></AddItem>}></Route>
      <Route path="/MyItems" element={<MyItems></MyItems>}></Route>

      
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
