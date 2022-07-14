import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import {LoginPage,Register,UserList,Home, Single} from './pages/';

function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route exact path='/' element= { <Home/>}/>
        <Route exact path='/login' element= { <LoginPage/>}/>
        <Route exact path='/register' element= {<Register/>}/>
        <Route exact path='/userlist' element= { <UserList/>}/>
        <Route exact path='/singleuser' element= { <Single/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
