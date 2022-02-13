import React from 'react'
import { useSelector } from 'react-redux'
import UserCompenent from './UserCompenent';
import axios from "axios";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from "../redux/actions/userAction"

const UserList = () => {
    const users = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await axios.get("https://reqres.in/api/users?page=2")
            .catch((err) => console.log("err", err))
        dispatch(setUsers(response.data.data));
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    console.log("users:", users)
    return (
        <div className='container'>
            <UserCompenent />
        </div>
    )
}

export default UserList