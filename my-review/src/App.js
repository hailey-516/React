import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import Timer from './components/Timer'
import Home from './components/Home';
import { createContext, useState } from 'react';
import Count from './components/Count';

// context 생성
export const UserContext = createContext();
// user 정보 기본값 세팅
let defaultUser = {
  id: '',
  pwd: ''
}

function App() {
  const [user, setUser] = useState(defaultUser);
  // 부모 컴포넌트에서 쓰는 context를 상태에 저장
  const defaultContext = {
    data: user,
    setData: setUser
  }



  
  return (
    <BrowserRouter>
    <div style={{height: "50px"}}></div>
      <header>
        <nav style={{backgroundColor: 'teal'}}>
          <Link to="/">HOME</Link>
          <Link to="/timer">타이머</Link>
          <Link to="/count">글자 수 세기</Link>
        </nav>
      </header>

      {/* 사용할 수 있도록 provider로 준 것 */}
      <UserContext.Provider value={defaultContext}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/count" element={<Count />} />
        </Routes>

        </UserContext.Provider>

    </BrowserRouter>
    
  );
}

export default App;
