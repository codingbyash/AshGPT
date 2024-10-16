import React from 'react'
import { Link } from 'react-router-dom'
type Props = {
     to: string,
     bg: string;
     text: string;
     textColor: string;
     onClick?:()=>Promise<void>;
}

const NavigationLink =(props : Props) => {
  return (
    <div>
     <Link to={props.to}
     style={{ background : props.bg, color: props.textColor }}>
     {props.text}
     
     </Link>
      
    </div>
  )
}

export default NavigationLink
