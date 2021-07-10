import React,{useState} from 'react'


const AddData = (props) =>{
    const {addItem,handleAuth} = props
    const [name, setName] = useState('')

    const handleChange =(e) =>{
        setName(e.target.value)
    }


    const handleSubmit =(e) =>{
        e.preventDefault()
        const formData={
            id: Number(new Date()),
            name: name
        }
        addItem(formData)
        handleAuth(false)

    }
    return (

        <div>

            <form onSubmit={handleSubmit}>
                <input type="text"  value={name} onChange={handleChange} name='name' placeholder="Add item"/><br/>
                <input type="submit" value="save"/>
            </form>

        </div>

    )
}

export default AddData