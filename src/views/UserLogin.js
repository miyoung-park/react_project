import createAxiosInstance from "../plugin/axios-instance";
import {useState} from "react";

const UserLogin = () => {
    const axiosInstance = createAxiosInstance();
    const [ uid, setUid ] = useState("");
    const [ passwd, setPasswd ] = useState("");
    const [ user, setUser ] = useState({});


    const onChangeUid = (e) => {
        setUid( e.target.value );
    }

    const onChangePasswd = (e) => {
        setPasswd( e.target.value );
    }

    const userLogin = async (e) => {
        e.preventDefault();
        const params = {
            uid,
            passwd,
        }

        const response = await axiosInstance.post("/api/user/login", params );
        const user = response.data.user
        setUser(user);
    }


    return (
        <div>
            <form action="">
                <input className="uid" onChange={onChangeUid}/><br/>
                <input className="passwd" onChange={onChangePasswd} /><br/>
                <button onClick={userLogin}>로그인</button>
            </form>

            <br/><br/>
            <div>
                <ul>
                    <li>이름: {user.name}</li>
                    <li>아이디: {user.uid}</li>
                    <li>이메일: {user.email}</li>
                    <li>주소: {user.address}</li>
                </ul>
            </div>

        </div>

    )



}

export default UserLogin;