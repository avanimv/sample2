import { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css'
function Row({title,fetchurl}){
    const [allmovies,setallmovies]=useState();
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchdata=async()=>{
        const response=await instance.get(fetchurl);
        setallmovies(response.data.results) 
    }
    useEffect(()=>{
        fetchdata();    
    },[])
    console.log(allmovies);
    return(
        <div className="row">
       <h1 style={{color:"white", fontSize:"20px"}}>{title}</h1>
       <div className="movie-row">
       {
        allmovies?.map(item=>(
            <img className="movie" src={`${base_url}${item.poster_path}`} alt="no-image" />
        ))
       }
       </div>
        </div>
    )
}
export default Row;