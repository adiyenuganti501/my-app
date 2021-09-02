import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Style from './JsonUsers.module.scss'


const JsonUsers = () => {
    const [users, setUsers] = useState([]);


    const fetchAPIFun = async () => {
        const ApiUrl = "https://jsonplaceholder.typicode.com/users";
        const result = await fetch(ApiUrl);
        const UserList = await result.json();
        setUsers(UserList);
        console.log();
    }

    useEffect(() => {

        fetchAPIFun();

    }, users)

    return (
        <React.Fragment>
            <div className={Style.content}>
                {users && users.length > 0 && users.map((user, index) => {
                    return (

                        <div className={Style.content_body}>
                            <Card>
                                <Card.Header>{user.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{user.username}</Card.Title>
                                    <Card.Text>
                                        <p>{user.email} </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </div>
                    )
                })}
            </div>
            {console.log(users)}
        </React.Fragment>
    )
}
export default JsonUsers;