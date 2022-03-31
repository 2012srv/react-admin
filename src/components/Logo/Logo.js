import React from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    const assignedClasses = [classes.Logo];
    if (props.collapsed) {
        assignedClasses.push(classes.Collapsed);
    }

    return (
        <Link className={assignedClasses.join(' ')} to="/"><img src={logo} alt="logo" /></Link>
    )
}

export default Logo;