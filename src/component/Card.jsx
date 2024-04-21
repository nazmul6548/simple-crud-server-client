import { Link } from "react-router-dom";


const Card = ({setUser,singleUser,user}) => {
    
    const {name,email,_id} = singleUser;
    // console.log(name);
    const handleDelete = _id => {
console.log("delete",_id);
fetch(`http://localhost:5000/users/${_id}`,{
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if (data.deletedCount> 0) {
        alert("you have deleted successfully")
        const remaining = user.filter(user => user._id !== _id)
                setUser(remaining);
                
    }
})
.catch(error => {
    console.error('Error:', error);
    alert("Failed to delete user");
});
    };
    return (
        <div>
               <div className=" p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">id: {_id}</span>
		<h2 className="text-xl font-semibold tracking-wide">name : {name}</h2>
	</div>
	<p className="text-gray-100">email : {email}  </p>
    <button onClick={() => handleDelete(_id)} className=" hover:bg-emerald-900 py-3 mt-2 w-full">Delete</button>
    <Link to={`/update/${_id}`}>
    <button className=" hover:bg-emerald-600 py-3 mt-2 w-full">Update</button>
    </Link>
</div>
        </div>
    );
};

export default Card;