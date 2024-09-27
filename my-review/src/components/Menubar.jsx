import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled(컴포넌트명)`css`
const MyLink = styled(Link)`
    background-color: teal;
    color: #eee;
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
        color: teal;
        background-color: #eee;
    }
`

export const Menubar = () => {
    return (
        <nav>
            <MyLink to="/timer">타이머</MyLink>
            <MyLink to="/count">글자 수 세기</MyLink>
        </nav>
    )
}