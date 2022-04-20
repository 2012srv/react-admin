import React, { useContext, useEffect } from "react";
import { AuthContext } from '../../context/authContext/AuthContext';
import { axiosAuth } from '../../hoc/withErrorHandler';

const Dashboard = (props) => {
    const { user } = useContext(AuthContext);
    console.log('dashboard');

    const fetchData = async () => {
        try {
            const res = await Promise.all([axiosAuth.get('users/find/62413a87c9ad66b525490bf3'), axiosAuth.get('users/find/62413a87c9ad66b525490bf3')]);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        // fetchData();
    }, []);

    return (
        <div>
            Dashboard
            <button onClick={() => fetchData()}>Run</button>
        </div>
    )
}

export default Dashboard;

