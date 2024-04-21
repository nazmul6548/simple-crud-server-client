import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";


const Users = () => {
    const users = useLoaderData()
    const [user,setUser] = useState(users)
    console.log(users);
    return (
        <div>
            <h2>hi there is users component {users.length}</h2>
         <div className="grid grid-cols-3 gap-10 mt-12">
         {
            user.map((singleUser) =><Card key={user._id} setUser={setUser} user={user} singleUser={singleUser}></Card>)
         }
         </div>
        </div>
    );
};

export default Users;