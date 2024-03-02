/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react'

type AuthUser = {
    name:string;
    email: string;
}
const User = () => {
const [user, setUser] = useState<AuthUser | null>(null);
//const [user, setUser] = useState<AuthUser>({} as AuthUser); //assertion

const handleLogin = () =>  {
    setUser({
        name: 'sleiman',
        email: 'sleiman@gmail.com'
    })
};
const handleLogout = () =>  {
    setUser(null)
};


return (
<div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>user name is {user?.name} </div>
    <div>user email is {user?.email} </div>


</div>
)
}

export default User