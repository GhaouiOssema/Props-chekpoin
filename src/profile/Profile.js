import React from 'react';

// im using bootstrap style only for the button 
import { Button  } from 'react-bootstrap';


function Profile(props) {

    // the alert message 
     const handleName = FullName =>  alert(FullName) ;
     const TheBtnAlert = (props) =>{
        return(
            <Button 
            onClick={() => props.handleName(`The Name Of The User Is ${props.FullName}  `)}
            variant="dark"
            >
                Check Name User
            </Button>
        )
     }  
    //  the logo component 
    
    const Logo = (props) => {
        return(
            <img 
            src = "https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp"
            alt="logo" 
            style= {{width :200, marginTop : "2%"}}
            />            
        )
    }

    //  style 
    const NameStyle = {
        color : "rgb(211, 3, 149)",
        fontFamily : "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    }
    const SpanStyle = {
        color : "rgb(151, 3, 151)" ,
        fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }
    const SpanPROStyle = {
        color : "rgb(151, 3, 151)",
        marginLeft : "-14%",
        marginRight :"1%",
    }


    return (
        <div>
            <h1 style={NameStyle}>{props.FullName} </h1>
            <h3>
                <span style={SpanStyle}>Bio : </span>
                <span>{props.bio}</span>
                <Logo ImgUrl={props.src} ImgAlt={props.alt} />
            </h3>         
            <h2>
            <label style ={{marginBottom :"3%"}} >  
                <span style={SpanPROStyle}>profession : </span> 
                <span>{props.profession}</span>
            </label>
            <br />
            <span style={{fontFamily : "Century Gothic"}} >{` MongoDB , ExpressJS , ReactJS , NodeJS`}</span>
            </h2>
            <br />
            <TheBtnAlert handleName={handleName} FullName={props.FullName}/><br />
        </div>
    )
}


export default Profile
