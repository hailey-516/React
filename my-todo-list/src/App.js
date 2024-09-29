import { useState } from 'react';

import './App.css';
import InsertItem from './components/InsertItem';
import MyContainer from './components/MyContainer';
import TodoList from './components/TodoList';

function App() {

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
    <div className="App">
      <MyContainer title="My TodoList">

        <InsertItem addItem={addItem}></InsertItem>
        <TodoList list={list} deleteItem={deleteItem} toggleComplete={toggleComplete} />

      </MyContainer>
    </div>
  );
}

export default App;
