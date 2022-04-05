import React from 'react';
import { Pie, PieChart } from 'recharts';

const SpecialChart = () => {

    const data01 = [
        {
            "sell": 241,
            "revenue": 10401
        },
        {
            "sell": 423,
            "revenue": 24500
        },
        {
            "sell": 726,
            "revenue": 67010
        },
        {
            "sell": 529,
            "revenue": 40405
        },
        {
            "sell": 601,
            "revenue": 50900
        },
        {
            "sell": 670,
            "revenue": 61000
        }
    ];

    const data02 = [
        {
            "month": "Mar",
            "investment": 100000,
        },
        {
            "month": "Apr",
            "investment": 200000,
        },
        {
            "month": "May",
            "investment": 500000,
        },
        {
            "month": "Jun",
            "investment": 500000,
        },
        {
            "month": "Jul",
            "investment": 600000,
        },
        {
            "month": "Aug",
            "investment": 700000,
        }
    ];



    return (
        <div>
            <PieChart width={730} height={250}>
                <Pie data={data01}
                    dataKey="sell"
                    nameKey="revenue"
                    cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02}
                    dataKey="investment"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    innerRadius={60} outerRadius={80} fill="#82ca9d" label />

            </PieChart>
        </div>
    );
};

export default SpecialChart;