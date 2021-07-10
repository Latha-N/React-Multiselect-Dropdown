import React,{useState,useEffect} from 'react'
import Multiselect from 'multiselect-react-dropdown';
import AddData from './AddData';
import './style.css'





const App = () =>{

const options = [{id:1, name:'javascript'}, {id:2 , name:'reactjs'},{id:2, name:'ruby and rails'}]
    const [data,setData] = useState(options)
    const [toggle, setToggle] = useState(false)

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
        //console.log(result)

    }

    const handleAuth = (value) =>{
        setToggle(value)
    }



    

    return (
        <div class="body">
            
            

            <h1>React multiselect</h1>
            <div  class=" searchBox inputField optionContainer chips option searchBox-option " >
            <Multiselect
            options={data}
            displayValue='name'
            placeholder="Start Typing, And We Shall Make Suggestons!"
            />
           </div><br/>
            
            {
                toggle ? (
                    <div>
                    <AddData addItem={addItem} handleAuth={handleAuth}/>
                     </div>
                ): (
                    
                     <div>
                     <button onClick={handleAuth}>+</button><br></br>
                     </div>
           
                )

            }


         

        </div>
    )
}

export default App