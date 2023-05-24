import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './sidebarbtn.css'

export default function Sidebarbtn
(props) {

  const location=useLocation();
  const btnclass=location.pathname===props.To?"sidebarbtn active" : "sidebarbtn" ;


  return (
    
        
        <Link style={{textDecoration:"none",color:"white"}} to={props.To}>
          <div className={btnclass}>
        {props.Icon}
        
          </div>

        </Link>

    
  )
}
