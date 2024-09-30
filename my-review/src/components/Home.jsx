import { createContext, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import Login from "./Login";


const Home = () => {
    const userCtx = useContext(UserContext);
    const user = userCtx.data;  // userCtx.data => user

    return (
        <>
            {
                user.id === '' ?
                <Login />
            :
                <div>
                    <p>{user.id}님 반갑습니다 ^^</p>
                    <input type="button" value="로그아웃"
                            onClick={()=>{userCtx.setData({id: '', pwd: ''})}} />
                </div>
            }
        </>
    )
} 

export default Home;