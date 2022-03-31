import React from "react";

import Logo from '../../components/Logo/Logo';
import Menus from "../../components/Menus/Menus";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faReceipt, faRectangleXmark, faRectangleList } from '@fortawesome/free-solid-svg-icons';

const allMenus = [
    { name: 'Dashboard', icon: faDashboard, to: '/dashboard', link: true },
    {
        name: 'Category 1',
        link: false,
        subLinks: [
            { name: 'Link 1', icon: faReceipt, to: '/link', link: true },
            { name: 'Link 2', icon: faRectangleXmark, to: '/link', link: true },
            { name: 'Link 3', icon: faRectangleList, to: '/link', link: true },
            { name: 'Link 4', icon: faReceipt, to: '/link', link: true },
        ]
    },
]

const Sidebar = (props) => {
    const assignedClasses = ['Menu'];
    if (props.collapsed) {
        assignedClasses.push('Collapsed');
    }
    if (props.hoverable) {
        assignedClasses.push('Hoverable');
    }

    console.log('sidebar');
    return (
        <aside className={assignedClasses.join(' ')}>
            <div className="d-flex">
                <Logo collapsed={props.collapsed} />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />
                <button className="Toggle" onClick={props.toggle}>toggle</button>
            </div>

            <div className="py-2">
                <Menus menus={allMenus} />
            </div>
        </aside >
    )
}

export default Sidebar;

