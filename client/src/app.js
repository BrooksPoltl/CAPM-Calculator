import React,{useState} from 'react'
import Form from './components/form'
import Response from './components/response'
const App = () =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const conditionalHandler = () =>{
        if(data.length === 0){
            return <Form loading = {loading}setLoading = {setLoading} setData = {setData}/>
        }else if (data.error){
            return <p>{data.error}</p>
        }else{
           return <Response data = {data}/>
        }
    }
    return(
        <div>
            <h1>CAPM Calculator App</h1>
            {loading?<div>Loading...</div>:conditionalHandler()}
        </div>
    )
}
export default App