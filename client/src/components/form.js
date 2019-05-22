import React,{useState} from 'react'
import axios from 'axios'

const Form = (props) =>{
    const URL = 'https://capm-calculator.herokuapp.com/'
    const [ticker, setTicker] = useState('')
    const [months, setMonths] = useState('')
    const submitHandler = async(event) =>{
        event.preventDefault();
        props.setLoading(true)
        let response;
        if(ticker !== '' & months!== ''){
            response = await axios.get(`${URL}?TICKER=${ticker}&MONTHS=${months}`)
        }
        console.log(response)
        props.setData(response.data)
        props.setLoading(false)
    }
    return(
    <div>
        <p>this app calculates the expected return on equity of S&P 500 companies using a linear regression going back the amount of months you would like. For the risk free rate I used the 10 year treasury.</p>
        <h2>Stock and market data:</h2>
        <a target = '__blank' href = 'https://www.alphavantage.co/'>Alpha Vantage</a>
        <h2>Treasury data:</h2>
        <a target = '__blank' href = 'https://www.quandl.com/'>Quandl</a>
        <form onSubmit ={(event)=>submitHandler(event)}>
            <div>
                <p>Ticker:</p>
                <input onChange = {
                (event)=>{
                    event.preventDefault();
                    setTicker(event.target.value);
                }}value = {ticker}/>  
            </div>
            <div>
                <p>Months:</p>
                <input onChange ={(event)=>{
                event.preventDefault();
                setMonths(event.target.value);
                }}
                value = {months}/>  
            </div>
            <button type ='submit'>Submit</button>      
    </form>
    </div>
)
}
export default Form