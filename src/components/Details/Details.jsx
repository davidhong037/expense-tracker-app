import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './detailsStyles';
import useTransactions from '../../useTransactions';

import {Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);




const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

    console.log(chartData.labels)
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details
