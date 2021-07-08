import React,{useState,useEffect} from 'react'
import Multiselect from 'multiselect-react-dropdown';
import AddData from './AddData';


const App = () =>{
const options = [{id:1, name:'javascript'},{id:2, name:"reactjs"}, {id:3, name:'nodejs'}]
    const [data,setData] = useState(options)

    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data)) 
    },[data])

    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem('data'))
        setData(result)
    },[])

    const addItem = (formData)=>{
        const result= [formData,...data]
        setData(result)
        console.log(result)

    }

    return (
        <div>
            <h1>React multiselect</h1>
            <Multiselect
            options={data}
            displayValue='name'
            placeholder="Add item"
         />
         <br></br>

         <AddData addItem={addItem}/>

        </div>
    )
}

export default App