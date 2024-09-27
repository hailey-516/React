import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import { Menubar } from './components/Menubar';
import Timer from './pages/Timer';
import Count from './pages/Count';

let mainStyle = {
  marginTop: "100px"
};

function App() {
  
  return (
    <BrowserRouter>
    <div style={{height: "50px"}}></div>
      <header style={{margin:"auto", width: "300px"}}>
        <Menubar />
      </header>

<main style={mainStyle}>
        <Routes>
          <Route path="/" element={<p>메인</p>} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/count" element={<Count />} />
        </Routes>
        </main>

    </BrowserRouter>
    
  );
}

export default App;
