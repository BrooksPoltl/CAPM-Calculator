import React,{useState} from 'react'
const Response = (props) =>{
    return(
        <div>
            <h2>Ticker: {props.data.ticker.toUpperCase()}</h2>
            <h2>Expected Return: {(props.data.capm*100).toFixed(2)}%</h2>
            <h3>Regression Data</h3>
            <ul>
                <li>Beta: {props.data.beta.toFixed(2)}</li>
                <li>Risk Free Rate: {(props.data.rf*100).toFixed(2)}%</li>
                <li>Market Risk Premium: {(props.data.MRP*100).toFixed(2)}%</li>
                <li>intercept: {props.data.intercept.toFixed(2)}</li>
                <li>standard error: {props.data.standard_error.toFixed(2)}</li>
                <li>R-squared: {(props.data.r_value**2).toFixed(2)}</li>
            </ul>
        </div>
    )
}
export default Response