import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

// component
import Profile from './profile/Profile'

function App(props) {

    // props
    props = {
        FullName : "Oussema Ghaoui",
        bio : "Hello Here , Im a Full Stack JS Student At :",
        Logo : "https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp",
        profession  : "MERN  Stack Developer"
    }
    
    //  the parent app styles 
    const AppStyles = {
        marginTop : "5.5%",
        marginLeft : "20%",
        width : 800,
        height : 540,
        display: "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        textAlign : "center",
        border : "5px solid #777",
        borderRadius : "4%",
        backgroundColor : "#f9a825"
    }
    
    
    return ( 
        <div className="uu">
        <div className = "App" style={AppStyles}>
            <ImgProfile ImgUrl={props.src} ImgAlt={props.alt} />
            <Profile FullName={props.FullName} bio={props.bio} Logo={props.Logo} profession={props.profession} />
        </div>
        </div>
    );
}

// image component 
const ImgProfile = () =>{

    // styles
    const ImgStyle = {
        width : 140,
        borderRadius : "50%"
    }

    return (
        <img 
            src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-1/p160x160/157294136_1759609547547063_57600891643970242_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=7ARPjx-r4lIAX_mzugW&tn=9Fv8zdEneVS1tuu2&_nc_ht=scontent.ftun15-1.fna&tp=6&oh=34fb6642bd99a24e6826f7b2292897ba&oe=60D22566" 
            alt="oussema ghaoui" 
            style={ImgStyle}
            />
    )
}

// default props
App.defaultProps={
    FullName : "Oussema Ghaoui",
    bio : "Hello Here , Im a Full Stack JS Student At :",
    Logo : "https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp",
    profession  : "MERN  Stack Developer"
};

// props type
App.propTypes  = {
    FullName : PropTypes.string,
    bio : PropTypes.string,
    profession  : PropTypes.string
}


export default App;