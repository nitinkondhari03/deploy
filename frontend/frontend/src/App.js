
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <h1>Backend Project</h1>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
