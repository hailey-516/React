import { useState } from 'react';
import styled from "styled-components";
import { IoAddCircleOutline } from "react-icons/io5";

const InsertInput = styled.input`
    border: none;
    border-radius: 50px 0px 0px 50px;
    background-color: #fff;
    height: 40px;
    min-width: 250px;
    padding-left: 15px;
    box-sizing: border-box;
`

const InsertBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 0px 50px 50px 0px;
    background-color: #6A6F4C;
    color: white;
    font-size: 25px;    // 버튼 아이콘 크기 조절
    display: flex;
    // justify-content: center;
    align-items: center;
`

const InsertContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`

// function InsertItem() {}
const InsertItem = (props) => {
    const [todoItem, setTodoItem] = useState('');

    const addTodo = () => {
        props.addItem(todoItem);    // App 컴포넌트에서 setList todoItem
        setTodoItem('');
    }

    return (
        <InsertContainer>

            <InsertInput value={todoItem} placeholder='할 일 입력' onChange={(e)=>{ setTodoItem(e.target.value); }}/>
            <InsertBtn onClick={addTodo}>
                <IoAddCircleOutline />
            </InsertBtn>

        </InsertContainer>
    )
}

export default InsertItem;