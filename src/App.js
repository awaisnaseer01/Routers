import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent'  
import Child from './Components/Child'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Routes>
        
       <Route path='/Parent' element={<Parent />} />
      <Route path='/Child' element={<Child />} />
      </Routes>

    </div>
  );
}

export default App;
