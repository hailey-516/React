import styled from 'styled-components';
import { GrFormTrash } from "react-icons/gr";
import { GrFormCheckmark } from "react-icons/gr";

const ListContainer = styled.ul`
    width: 100%;
    margin: 12px 0px;
    padding: 0px 30px;
`
const TodoItem = styled.li`
    height: 30px;
    background-color: #3582c4;
    display: flex;
    align-items: center;
    // justify-content: center;
    justify-content: space-between; /* space-between으로 수정 */
    padding: 0 10px;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
    color: ${({ completed }) => (completed ? '#222' : '#fff')};
`

export default function TodoList({list, deleteItem, toggleComplete}) {
    return (
        <ListContainer>
            {
                list.map((todo, index)=> (
                    <TodoItem key={'todo' + index} completed={todo.completed}>
                    {todo.text}
                    <div>
                        <GrFormTrash onClick={() => deleteItem(index)} />
                        <GrFormCheckmark onClick={() => toggleComplete(index)} />
                    </div>
                    </TodoItem>
                ))
            }
        </ListContainer>
    )
}