import LoginPage from './Pages/LoginPage/LoginPage';
import Facts from './Pages/Facts/Facts';
import Home from './Pages/Home/Home';
import Techniques from './Pages/Techniques/Techniques';
import Contacts from "./Pages/Contacts/Contacts"
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/facts' element={<Facts />}></Route>
        <Route path='/techniques' element={<Techniques />}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
