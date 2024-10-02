import { useEffect, useState } from "react";
import styled from "styled-components";

const WaitList = () => {
    // useState : 상태관리 훅
    // * const [상태명, set상태명] = useState(초기값);
    const [list, setList] = useState([
        { name: '아이유', count: 10, phone: '010-1010-1010' },
        { name: '차은우', count: 5, phone: '010-3030-3030' },
        { name: '카리나', count: 3, phone: '010-7070-7070' }
    ]); // 대기 명단 관련 상태

    const [name, setName] = useState('');   // 이름 입력 관련 상태
    const [count, setCount] = useState(0);  // 인원 수 입력 관련 상태
    const [phone, setPhone] = useState(''); // 연락처 입력 관련 상태

    // list 상태가 변경될 때마다 실행하는 훅 => 디버깅용으로 사용, list 상태가 잘 걸리는지 보기 위해서...
    // useEffect(()=>{
    //     console.log("*******************");
    //     console.log(list);
    //     console.log("*******************");
    // }, [list]);

    // function addList() {}
    const addList = () => {

        const newPerson = {
            name: name,
            count: count,
            phone: phone
        }
        
        // 기존 데이터에 추가된 대기 명단을 반영
        setList([...list, newPerson]);

        // 입력 요소들을 초기화하기 위태 상태 변경
        setName('');
        setCount('');
        setPhone('');
    }

    return (
        <div align="center">
            <h3>엘식당 대기 명단 표</h3>

            <table border="1">
                <thead style={{backgroundColor: 'lightgray'}}>
                    <tr>
                        <th>이름</th>
                        <th>인원 수</th>
                        <th>연락처</th>
                    </tr>
                </thead>

                <tbody>
                        {
                            list.map((item, index)=> {
                                return (
                                <tr key={'wait'+index}>
                                    <td>{item.name}</td>
                                    <td style={{color: item.count > 5 ? 'red' : item.count > 3 ? 'orange' : 'blue'}}>{item.count}</td>
                                    <td>{item.phone === '' ? '' : '★'+item.phone}</td>
                                </tr>
                                )
                            })
                        }
                </tbody>
            </table>

            <hr></hr>

            <h4>새 대기자 추가</h4>
            <div>
                <input type='text'
                        placeholder='이름 입력'
                        value={name}
                        onChange={(e)=>{ setName(e.target.value); }} />
                <input type='number'
                        placeholder='인원 수 입력'
                        value={count}
                        onChange={(e)=>{ setCount(e.target.value); }} />
                <input type='text'
                placeholder='연락처 입력'
                value={phone}
                onChange={(e)=>{ setPhone(e.target.value); }} />
                <button onClick={addList}>등록</button>
                {/* <button onClick={()=>{addList()}}>등록</button> */}
            </div>
        </div>
    )
}

export default WaitList;