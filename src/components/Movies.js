import React from "react";
import { Link } from "react-router-dom";
import Rate from "./MoviesData/Rate";

const Movie =({movie: {posterurl , title , rating , description,trailer}})=>{
    return(
    <div className="movie">
        <img src={posterurl} alt="movie"/>
        <div className="movie_info">
            <h3>{title}</h3>
            <Rate rating={rating}/>

        </div>
        <div className="description-btn">
    <Link  to={{pathname: '/description', state:{description : description , trailer}}} >
        <button style={{display:'flex' , justifyContent:'center', borderRadius:10, backgroundColor:'black', color:'white', border:'none', fontSize:16, fontStyle:'oblique'}}>Description</button>
    </Link>
        </div>


          
            
       

    </div>
    
    
    )}

export default Movie;