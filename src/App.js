import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About'
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import BicycleDetails from './Pages/BicycleDetails/BicycleDetails';
import Error from './Shared/Error/Error';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import MyBlog from './Pages/MyBlog/MyBlog';
import AddBicycle from './Pages/AddBicycle/AddBicycle';
import MyItems from './Pages/MyItems/MyItems';
import ManageItems from './Pages/ManageItems/ManageItems';

function App() {
  return (
    <div>
      <Header></Header>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
  <Route path='/bicycle/:bicycleId' element={
    <RequireAuth>
      <BicycleDetails></BicycleDetails>
    </RequireAuth>
  }></Route>
  <Route path="/blog" element={<MyBlog></MyBlog>}></Route>
  <Route path='/addBicycle' element={
    <RequireAuth>
      <AddBicycle></AddBicycle>
    </RequireAuth>
  }></Route>
  <Route path='/myItems' element={
    <RequireAuth>
      <MyItems></MyItems>
    </RequireAuth>
  }></Route>
  <Route path='/addItems' element={
    <RequireAuth>
      <AddBicycle></AddBicycle>
    </RequireAuth>
  }></Route>
  <Route path='/manageItems' element={
    <RequireAuth>
      <ManageItems></ManageItems>
    </RequireAuth>
  }></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path='/register' element={<Register></Register>}></Route>
  <Route path='*' element={<Error></Error>}></Route>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
