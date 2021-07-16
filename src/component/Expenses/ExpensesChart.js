import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = props => {
    const chartDataPoint = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (let exp of props.expenses){
        let expMonth = exp.date.getMonth(); // Starting at zero => Jan => 0;
        chartDataPoint[expMonth].value += exp.amount;
    }

    return <Chart dataPoints={chartDataPoint}></Chart>;
}
export default ExpensesChart;