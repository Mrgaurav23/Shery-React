import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Card from './Component/card'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import FAQ from './Pages/FAQ'
import axios from 'axios'


const App = () => {

  const user = [
    {
        "name": "Alice Smith",
        "profession": "Software Engineer",
        "city": "New York",
        "age": 30,
        "profile_photo": "https://example.com/photos/alice_smith.jpg"
    },
    {
        "name": "Bob Johnson",
        "profession": "Graphic Designer",
        "city": "San Francisco",
        "age": 25,
        "profile_photo": "https://example.com/photos/bob_johnson.jpg"
    },
    {
        "name": "Carol Williams",
        "profession": "Teacher",
        "city": "Chicago",
        "age": 35,
        "profile_photo": "https://example.com/photos/carol_williams.jpg"
    },
    {
        "name": "David Brown",
        "profession": "Photographer",
        "city": "Los Angeles",
        "age": 28,
        "profile_photo": "https://example.com/photos/david_brown.jpg"
    },
    {
        "name": "Eve Davis",
        "profession": "Doctor",
        "city": "Boston",
        "age": 40,
        "profile_photo": "https://example.com/photos/eve_davis.jpg"
    }
]

  const [data, setdata] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');

    setdata(response.data)
  }

  useEffect(() => {
    getData();
  
  },[])
  
  return (
    <>
    <Navbar/>
    <div className='p-5'>
      {user.map( (elem , idx)=>{
        return <Card key={idx} username = {elem.name} profession = {elem.profession} city = {elem.city} age = {elem.age} profile_photo = {elem.profile_photo}/>
      })}
    </div>
    <div className='px-5 py-5'>
      <div className='p-5 m-5'>
        {data.map((elem,idx)=>{
          return <div key={idx} className='bg-gray-200 w-full p-5 mb-3 rounded text-black flex justify-between text-center'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
    {/* <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
    </Routes>
    </div> */}
    <Footer/> 
    </>
  )
}

export default App