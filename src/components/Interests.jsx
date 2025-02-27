import React, { useState } from 'react'

const INTERESTS = ["cooking", "reading", "music", "sketching", "dancing"]
const Interests = () => {
    const [selectedIntrest, setSelectedIntrest] = useState([])
    const handleOnchange = (interest) => {
        setSelectedIntrest((pre)=>pre.includes(interest) ? pre.filter(item=>item !== interest) :[...pre ,interest])

    }
    return (
        <div className='items-start m-2 flex flex-col gap-4  '>
            {INTERESTS.map((interest) => <label className=''>
                <input className='mx-2' type='checkbox' checked={selectedIntrest.includes(interest)} onChange={() => handleOnchange(interest)} />
                {interest}
            </label>)}


        </div>
    )
}

export default Interests