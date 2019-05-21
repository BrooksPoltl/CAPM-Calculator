import React,{useState} from 'react'
import Form from './components/form'
const App = () =>{
    const [data, setData] = useState([])

    return(
        <div>
            <h1>CAPM Calculator App</h1>
            <Form />
        </div>
    )
}
export default App