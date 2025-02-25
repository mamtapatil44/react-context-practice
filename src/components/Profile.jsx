import React, { useState } from 'react'

const Profile = () => {
    const [inputfield, setInputField] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = (field, value) => {
        setInputField((prevS) => ({ ...prevS, [field]: value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputfield ", JSON.stringify(inputfield))

    }
    return (
        <div className='flex flex-col m-2 p-4 border rounded-lg w-80 mx-auto'><form className="flex flex-col space-y-3" onSubmit={(e) => handleSubmit(e)}>
            <input className="border p-2 rounded" type='text' placeholder='Email' value={inputfield.email} onChange={(e) => handleInputChange("email", e.target.value)} />
            <input className="border p-2 rounded" type='text' placeholder='Password' value={inputfield.password} onChange={(e) => handleInputChange("password", e.target.value)} />
            <button type='submit' className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        </form></div>
    )
}

export default Profile