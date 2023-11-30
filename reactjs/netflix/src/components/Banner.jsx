import { useState } from "react";
import instance from "../instance";
import { useEffect } from "react";
import './Banner.css'

function Banner({fetchurl}){
    const base_url = "https://image.tmdb.org/t/p/original/";
    const[movies,setmoviebanner]=useState();
   const fetchdata=async()=>{
        const{data}=await instance.get(fetchurl);

        setmoviebanner(data.results[Math.floor(Math.random()*data.results.length)]) 
    }
    useEffect(()=>{
        fetchdata();    
    },[]);
    console.log("movie banner images");
    console.log(movies);
    return(
        <>
        <div style={{height:"600px",backgroundImage:`url(${base_url}${movies?.backdrop_path})`,width:"100%",backgroundPosition:"center"}}>   
        <div className="banner_content">
            <h1 style={{color:"white"}}>{movies?.name}</h1>
            <button className="btn btn-danger">Play<i class="fa-solid fa-play bg-transparent ms-2"></i></button>
            <button className="more ms-2 btn border-white">More Info<i class="fa-solid fa-caret-down bg-transparent ms-2"></i></button>
            <h4 style={{color:"white"}}>{movies?.overview?.slice(0,200)}...</h4>
            </div>        
        </div>      
        </>
    )
}
export default Banner;