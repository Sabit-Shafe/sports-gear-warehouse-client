
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
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound';


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
        <Route path="*" element={<NotFound></NotFound>}></Route>


        <Route path="/items/:ItemId" element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path="/Inventory" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/AddItem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/MyItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/AddItem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
