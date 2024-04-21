import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h2>hi there is users component {users.length}</h2>
        </div>
    );
};

export default Users;