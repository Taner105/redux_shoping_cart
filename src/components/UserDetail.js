import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { selectedUser, removeSelectedUser } from '../redux/actions/userAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserDetail = () => {
    const user = useSelector((state) => state.user);
    const { id, first_name, last_name, avatar, email } = user
    const { userId } = useParams();
    const dispatch = useDispatch();
    console.log(user);

    const fetchUserDetail = async () => {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`)
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(selectedUser(response.data.data));
    }

    useEffect(() => {
        if (userId && userId !== "") fetchUserDetail();
        return () => {
            dispatch(removeSelectedUser())
        }
    }, [userId]);

    return (
        <div className='container'>
            <img id='image-detail' src={avatar} alt={first_name} />
            <div className='title-container'>
                <h1>{first_name} {last_name}</h1>
                <h4> Email : {email}</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ipsum vitae, corporis magni eius ad porro voluptate exercitationem. Unde, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illo dicta et nisi neque odio modi obcaecati, illum repellendus aliquid cum natus quae qui sint incidunt exercitationem suscipit odit porro! Repellendus vero, cumque cupiditate ipsum blanditiis, neque illo asperiores quidem provident voluptatum dolores necessitatibus placeat alias dolor soluta, perspiciatis nobis.</p>

            </div>

        </div>
    )
}

export default UserDetail