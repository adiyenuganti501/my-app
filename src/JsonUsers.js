import React, { useEffect, useState } from 'react'

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

        {users && users.length>0 && users.map((user,index)=>{
            return (
                <div>
                        <h2>{user.name}</h2>

                </div>
            )
        })}

            {console.log(users)}
        </React.Fragment>
    )
}
export default JsonUsers;