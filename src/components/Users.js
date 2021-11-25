import React, { useState, useEffect } from 'react'
import Members from './Members'


const Users = () => {
   
    const users =[
        {
            login : 'Rihan',
            avatar_url : 'https://avatars.githubusercontent.com/u/1?v=4'
        }

    ]
   
   
   const [member, setmember] = useState([])

   useEffect(() => {
       
    fetch('https://api.github.com/users')
    .then(data => data.json())
    .then(data => setmember(data))

   }, [])
   
    return (
        <>
        <div className="contaner my-5">
            <div className="row  mx-3">
                {    
                    member.map((data) => <Members member={data}></Members> )
                }

               
            </div>
        </div>
           
        </>
    )
}

export default Users
