import React from "react";
import { NavLink } from "react-router-dom";

import Logo from '../../components/Logo/Logo';
import classes from './Sidebar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faReceipt, faRectangleXmark, faRectangleList } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
    const assignedClasses = [classes.Menu];
    if (props.collapsed) {
        assignedClasses.push(classes.Collapsed);
    }
    if (props.hoverable) {
        assignedClasses.push(classes.Hoverable);
    }
    console.log('sidebar');
    return (
        <aside className={assignedClasses.join(' ')}>
            <Logo collapsed={props.collapsed} />
            <button onClick={props.toggle}>toggle</button>
            <ul className={classes.Nav}>
                <li><NavLink to="/dashboard" className='d-flex align-items-center'><span className={classes.IconHolder}><FontAwesomeIcon icon={faDashboard} /></span>Dashboard</NavLink></li>
                <li>
                    <span>Category 1</span>
                    <ul>
                        <li><NavLink to="/link" className='d-flex align-items-center'><span className={classes.IconHolder}><FontAwesomeIcon icon={faReceipt} /></span>Link 1</NavLink></li>
                        <li><NavLink to="/link" className='d-flex align-items-center'><span className={classes.IconHolder}><FontAwesomeIcon icon={faRectangleXmark} /></span>Link 2</NavLink></li>
                        <li><NavLink to="/link" className='d-flex align-items-center'><span className={classes.IconHolder}><FontAwesomeIcon icon={faRectangleList} /></span>Link 3</NavLink></li>
                    </ul>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar;

