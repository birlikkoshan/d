import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const SignButton = (props) => {
    const {text, url, left, right, bottom, func} = props 
  return (
      <Link onClick={func} to={url || '/'} className="sign-btns" style={{left: left || 'auto', right: right || 'auto', bottom: bottom|| 'auto'}}>
        {text}
      </Link>
  )
};

export default SignButton;
