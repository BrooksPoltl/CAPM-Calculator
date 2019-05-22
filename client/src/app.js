import React,{useState} from 'react'
import Form from './components/form'
import Response from './components/response'
import {Container, InnerContainer } from './styles/app'
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
        <Container>
            <InnerContainer>
               <h1>CAPM Calculator App</h1>
                {loading?<div><i class="fas fa-spinner fa-spin"></i><p>Getting data and running regression...</p></div>:conditionalHandler()}
            </InnerContainer>
        </Container>
    )
}
export default App