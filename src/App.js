// Import necessary modules from React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage  from './components/pages/landingPage';
import UploadPage from './components/pages/upload'
import developers from './components/pages/developers';
import Results from './components/pages/Results';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/' exact Component={LandingPage}/>
    <Route path='/uploadPage' Component={UploadPage}/>
    <Route path='/developers' Component={developers}/>
    <Route path='/results' Component={Results}/>
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
