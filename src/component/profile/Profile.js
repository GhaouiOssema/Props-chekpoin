import React from 'react';

// component 
import Logo from './Logo';
import TheBtnAlert from '../TheBtnAlert';

function Profile(props) {

    // the alert 
    const handleName = FullName =>  alert(FullName) ;

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
            {props.children}
            <h1 style={NameStyle}>{props.myData.FullName} </h1>
            <h3>
                <span style={SpanStyle}>Bio : </span>
                <span>{props.myData.bio}</span>
                <Logo/>
            </h3>         
            <h2>
            <label style ={{marginBottom :"3%"}} >  
                <span style={SpanPROStyle}>profession : </span> 
                <span>{props.myData.profession}</span>
            </label>
            <br />
            <span style={{fontFamily : "Century Gothic"}} >{` MongoDB , ExpressJS , ReactJS , NodeJS`}</span>
            </h2>
            <br />
            <TheBtnAlert handleName={handleName} FullName={props.myData.FullName} />
        </div>
    )
}


export default Profile
