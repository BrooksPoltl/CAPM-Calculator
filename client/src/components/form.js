import React,{useState} from 'react'
import axios from 'axios'

const Form = () =>{
    const URL = 'http://localhost:8000/'
    const [ticker, setTicker] = useState('')
    const [months, setMonths] = useState('')
    const submitHandler = (event) =>{
        event.preventDefault();
        if(ticker !== '' & months!== ''){
            axios.get(`${URL}?TICKER=${ticker}&MONTHS=${months}`)
            .then(response=>{
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        
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