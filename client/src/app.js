import React,{useState} from 'react'

const App = () =>{
    const [ticker, setTicker] = useState('')
    const [months, setMonths] = useState('')
    return(
        <div>
            <h1>CAPM Calculator App</h1>
            <form>
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
            </form>
        </div>
    )
}
export default App