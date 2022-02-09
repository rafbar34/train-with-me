import {BrowserRouter,
  
  Route,Routes,
 
} from "react-router-dom";
import './App.css';
import Clients from './compoments/ClientsTable/Clients';
import { useState } from "react";
import MaterialTable from 'material-table'
import Order from './compoments/Orders/OrdersTable'
import ButtonAppBar from './compoments/menu/AccountMenu'


  
 


function App() {
  
  return (
<BrowserRouter>

    <div>
    
  
  <ButtonAppBar></ButtonAppBar>

    <div className="layout">
    <Routes> <Route path="/clients"component={Clients}  element={<Clients/> } /> </Routes>
    </div>
    <div className="layout">

      <Routes><Route path="/order" component={Order} element={<Order/>} /> </Routes> </div>

    <div> <Routes><Route path="/" exact component={Home} render={() => <div>Home</div>} element={<Home/>} /> </Routes> </div> 



 </div> </BrowserRouter>)
  
}

const Home =() =>(

  
    <div className="animation"><div className="card">Hello User!</div><div className="card delayAnimation">
   You are on the website about form </div></div>

    
  
)



export default App;
