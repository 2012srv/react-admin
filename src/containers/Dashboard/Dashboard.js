import React, { useContext, useEffect } from "react";
import { AuthContext } from '../../context/authContext/AuthContext';
import { axiosAuth } from '../../hoc/withErrorHandler';

const Dashboard = (props) => {
    const { user } = useContext(AuthContext);
    console.log('dashboard');

    useEffect(() => {

        axiosAuth.get('users/find/61dbe5cd6193b7f393dd3bc2').then(data => {
            console.log(data);
        }).catch((err) => {
            // console.log(err);
        });

    }, []);

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;

