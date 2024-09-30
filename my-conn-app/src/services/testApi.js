import axios from 'axios';


// 컴포넌트 아님. js 코드만 작성. 다른 컴포넌트에서 쓰기 위해 export
export const test1 = () => {
    // 어떤 데이터를 리턴해 줌
    return "테스트다!!!";
}

export const test2 = () => {
    /*
        fetch API

        fetch(요청 주소, options)
        - options
            * method: 통신방식 (get/post/put/delete)
            * headers: 요청 헤더 설정       // 나중에 api 사용 시 요청 키값...
            * body: POST 요청 시 전달할 데이터
            
        fetch("요청 주소", {method: 'post', headers: {}, body: {}})
    */
    
    // 자바크스립트 내장
    // 자체를 리턴, promise로 리턴됨.
    return fetch("http://192.168.10.11:7777", {})
    .then(response=>{
        if (response.ok) {
            return response.json()
        }

        throw new Error("test2 :: 통신 오류!@")
    })
    .then(data=> {
        console.log(data);
        return data;
    })
    .catch(error=> {
        console.log(error);
    })
    // .finally()
}

// async await -> 비동기를 동기처럼 사용... 바로 return response해 주면 응답이 오기 전에 바로 리턴될 수 있음.
export const test3 = async () => {
    try {

        const response = await fetch("http://192.168.10.11:7777", {method: 'get'});
        const result = await response.json();
        return result;

    } catch (e) {
        console.log(e);
        throw new Error("test3 :: 통신 실패@!");
    }
    
}

export const test4 = async () => {
    return await axios.get("http://192.168.10.11:7777");
    // 응답 객체를 꺼내고, json으로 바꿔주는 작업을 axios가 해 주기 때문에 바로 사용할 수 있다.
}

export const test5 = async () => {
    return await axios.post("http://192.168.10.11:7777/list");
}