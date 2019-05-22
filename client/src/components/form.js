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
)
}
export default Form