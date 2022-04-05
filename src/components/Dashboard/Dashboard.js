import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import SpecialChart from '../SpecialChart/SpecialChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-detail'>
            <h2>I am from Dashboard</h2>
            <MyLineChart></MyLineChart>
            <SpecialChart></SpecialChart>
        </div>
    );
};

export default Dashboard;