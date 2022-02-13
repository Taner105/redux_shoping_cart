import React from 'react'
import { Button, Card } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


const UserCompenent = () => {
    const navigate = useNavigate();
    const users = useSelector((state) => state.allUsers.users);
    const renderList = users.map((user) => {
        const { id, first_name, last_name, avatar, email } = user
        return (
            <Card onClick={() => navigate(`/user/${id}`)} style={{ width: '18rem', marginTop: "50px" }} key={id}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{first_name} {last_name}</Card.Title>
                    <Card.Text>
                        Email: {email}
                    </Card.Text>

                    <Button variant="primary">Detail</Button>
                </Card.Body>
            </Card>
        )
    })
    // const { id, title } = users[0]
    return (<> {renderList} </>
    )
}

export default UserCompenent