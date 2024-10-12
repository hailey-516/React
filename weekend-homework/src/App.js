import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from './components/StyledComponents';
import LeftContainer from './components/LeftContainer';
import MenuBar from "./components/MenuBar";
import { MainTitle } from "./components/StyledComponents";
import RightContainer from "./components/RightContainer";
import { StartButton } from "./components/StyledComponents";
import TodoList from "./components/TodoList";
import MyContainer from "./components/MyContainer";
import InsertItem from "./components/InsertItem";



const rightStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const[list, setList] = useState([
    { text: '샘플', completed: false},
    { text: '데이터', completed: false}
  ]);

  const addItem = (item) => {   // InsertItem 컴포넌트에서 추가될 데이터를 매개변수로 받아
                                // list 상태에 추가
    // setList();
    // list.push(item);
    setList([...list, { text: item, completed: false}]);
  }

  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const toggleComplete = (index) => {
    const newList = list.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
  };

  return (
    <BrowserRouter>
      <AppContainer>
        <LeftContainer width={isStarted ? '30%' : '70%'}>
          {
            isStarted ?
            <MenuBar />
            :  
            <MainTitle>
              My Weekend Homework <br/>
              Page
            </MainTitle>
          }
        </LeftContainer>
        <RightContainer style={rightStyle} width={isStarted ? '70%' : '30%'}>
          {
            isStarted ?
            <>
              <MyContainer title="My TodoList">

              <InsertItem addItem={addItem}></InsertItem>
              <TodoList list={list} deleteItem={deleteItem} toggleComplete={toggleComplete} />

</MyContainer>
            </>
            :
            <StartButton onClick={()=>{setIsStarted(true)}}>Start</StartButton>
          }
        </RightContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
