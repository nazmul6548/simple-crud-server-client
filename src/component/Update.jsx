import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loader = useLoaderData()
    console.log(loader);

    const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const name = form.name.value;
const email = form.email.value;
console.log(name,email);
const updatedUser = {name,email}
fetch(`http://localhost:5000/users/${loader._id}`,{
    method: 'PUT',
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify(updatedUser)
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if (data.modifiedCount>0) {
        alert("user updated successfully")
    }
})
    };
    return (
        <div>
            <h1 className="text-5xl font-bold">Update your Name & Email</h1>
            <p className="text-xl font-bold mt-5">Present Name : {loader.name}</p>
            <p className="text-xl font-bold mt-3">Present Email : {loader.email}</p>
            <form onSubmit={handleSubmit} className="w-2/4 m-auto mt-12">
                <input className="w-full border-2 py-2 mb-4 rounded-md bg-indigo-50" type="name" name="name" defaultValue={loader.name} placeholder="update name" />
                <br />
                <input className="w-full border-2 py-2 mb-4 rounded-md bg-indigo-50" type="email" name="email" defaultValue={loader.email} placeholder="update email" />
                <br />
                <input className="bg-indigo-600 text-white py-2 w-full rounded-md" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;