import React from 'react'
import {Button} from 'react-bootstrap'

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

export default TheBtnAlert
