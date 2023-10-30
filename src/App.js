// import logo from './logo.svg';
import './App.css';
import ModelPagination from './Model-Pagination';
import ListDetails from './listDetails';
import Login from './loginPage';
// import ModalView from './modal';
// import Normal from './normal';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <Link to={'/'}> </Link> */}
      <Routes>
       
        <Route path='/' element={<Login/>}></Route>
        <Route path='/ModelPagination' element={<ModelPagination/>}></Route>
        <Route path='/ListDetails' element={<ListDetails/>}></Route>

        
      </Routes>
      </BrowserRouter>

  
    {/* <Normal/> */}
    {/* <ModalView/> */}
    </div>
  );
}

export default App;
