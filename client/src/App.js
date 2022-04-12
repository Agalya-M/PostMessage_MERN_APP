import logo from './logo.svg';
import './App.css';
import Postmessage from './components/postMessage';
import { BrowserRouter as Router , Routes , Route ,Navigate ,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
           <Router>
        <Routes>
        <Route exact path="/" element={<Postmessage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
