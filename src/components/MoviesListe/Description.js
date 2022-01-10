import React from 'react'
import { Link } from "react-router-dom"
const description = (props) => {
    const desc = props.location.state.description;
    const vid= props.location.state.trailer
    console.log(vid)

    return (

        <div style={{
            width:1000,
            marginLeft:'auto',
            marginRight: 'auto',
            display:'flex',
            flexDirection: 'column',
            alignItems:'center',
        }}>

            <h1 style={{color:'rgb(204, 156, 0)'}}>Description</h1>
            <div>
                <h3 style={{color:'rgb(204, 156, 0)'}}>{desc}</h3>
                <iframe width="1000" height="600" src={vid}  allowFullScreen></iframe>
            </div>
    <Link  to={{pathname: '/'}} >
        <button  style={{ marginTop:10,display:'flex' , justifyContent:'center', borderRadius:10, backgroundColor:'orange', color:'white', border:'none', fontSize:25, fontStyle:'oblique',}}>Go Back To Home</button>
    </Link>
        </div>
    )
}

export default description
