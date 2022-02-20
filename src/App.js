
import { useEffect, useState } from 'react';
import './App.css';
const api={
  base:"https://api.openweathermap.org/data/2.5/",
  key:"0694e16cd7543ddcb30c0a0bfbc276f2"
}

function App() {
  const[city,setCity]=useState(null);
  const[search,setSearch]=useState("Patna");
  useEffect(()=>{
    const fetchApi=async()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0694e16cd7543ddcb30c0a0bfbc276f2`
      const response=await fetch(url);
      //console.log(response)
      const resJson=await response.json();  
      setCity(resJson.main);
      //console.log(resJson.main);
    }
    fetchApi();
  },[search])
  return (

    <div className='app'>
     <div className='search-box'>
      <input type="search" id="h1"
       placeholder='Search Here...' 
       onChange={(e)=>{setSearch(e.target.value)}}/>
     </div>
     {!city?(
       <p id="ndf">No data Found!</p>
     ):(<div className='info'>
     <h2 className='location'><i  className='fas fa-street-view'></i>{search}</h2>
     <h1 className='temp'>{city.temp}&deg;Cel</h1>
     <h3 className='tmax_min'>Min:{city.temp_min}&deg;Cel | max:{city.temp_max}&deg;Cel</h3>
   </div>
     )}
    </div>
  );
}

export default App;
