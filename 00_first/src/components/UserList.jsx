import { useState } from "react";

function User(props) {
    const user = props.user;
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
        </tr>
    )
}

function UserList() {
    const [list, setList] = useState([
        { name: '카리나', age: 25, gender: '여자', phone: '010-1234-1234'},
        { name: '윈터', age: 24, gender: '여자', phone: '010-1234-5678'},
        { name: '아이유', age: 30, gender: '여자', phone: '010-1234-1111'}
    ]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');


    function changeName(e) {
        const inputValue = e.target.value;  // 입력 요소의 변경된 값
        setName(inputValue);                // 해당 값을 상태에 적용
    }

    function changeAge(e) {
        const inputValue = e.target.value;
        setAge(inputValue);
    }

    function changeGender(e) {
        const inputValue = e.target.value;
        setGender(inputValue);
    }

    function changePhone(e) {
        const inputValue = e.target.value;
        setPhone(inputValue);
    }

    return (
        <div>
            <h1>회원 정보 출력</h1>

            <hr></hr>

            <div>
                <h3>회원 정보 등록</h3>
                <hr></hr>
                <input type='text' placeholder='이름' value={name} onChange={changeName} />
                <input type='text' placeholder='나이' value={age} onChange={changeAge} />
                <input type='text' placeholder='성별' value={gender} onChange={changeGender} />
                <input type='text' placeholder='연락처' value={phone} onChange={changePhone} />
                <button>등록</button>

            </div>

            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => 
                                <User key={'user'+index } user={item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;