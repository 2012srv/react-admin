import React from "react";
import { Link } from "react-router-dom";

import classes from './Logo.module.css';

const Logo = (props) => {
    const assignedClasses = [classes.Logo];
    if (props.collapsed) {
        assignedClasses.push(classes.Collapsed);
    }

    return (
        <Link className={assignedClasses.join(' ')} to="/">Logo</Link>
    )
}

export default Logo;