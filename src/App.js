
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Loanpage from './Loanpage';
import Loanpage1 from './Loanpage1';
import Loanpage2 from './Loanpage2';
import Loanpage3 from './Loanpage3';
import Loanpage4 from './Loanpage4';
import Loanpage5 from './Loanpage5';
import Navbar  from './Navbar';
import Form from './Form';

function App() {
  return (
    <>
    
    <div className="App">
      <Navbar></Navbar>
      <switch>
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/loan' Component={Loanpage}/>
        <Route path='/loan1' Component={Loanpage1}/>
        <Route path='/loan2' Component={Loanpage2}/>
        <Route path='/loan3' Component={Loanpage3}/>
        <Route path='/loan4' Component={Loanpage4}/>
        <Route path='/loan5' Component={Loanpage5}/>
        <Route path='/contactus' Component={Form}/>

        
     </Routes>
     </switch>
    
    </div>

    </>
    
  );
}

export default App;
