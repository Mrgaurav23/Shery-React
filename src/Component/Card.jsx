import React from 'react'

const card = (props) => {

  console.log(props);
  return (
    <div className='bg-white inline-block p-7 text-black rounded text-center m-5'>
      <img className=' ml-5 h-32 w-32 rounded-full mb-4 bg-orange-200 ' src={props.profile_photo} alt="profile photo" />
      <h1 className='text-1xl font-semibold mb-4'>Username is {props.username}</h1>
      <h3 className=' text-emerald-300'>Profession {props.profession}</h3>
      <h2 >City : {props.city} , Age : {props.age}</h2>
      <button className='m-4 bg-emerald-700 text-slate-50 px-4 py-2 rounded '>Add Friend</button>
    </div>
  )
}

export default card