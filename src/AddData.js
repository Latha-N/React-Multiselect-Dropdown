import React,{useState} from 'react'


const AddData = (props) =>{
    const {addItem} = props
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
        setName('')
    }
    return (

        <div>

            <form onSubmit={handleSubmit}>
                <input type="text"  value={name} onChange={handleChange} name='name' placeholder="enter name"/><br/>
                <input type="submit" value="save"/>
            </form>

        </div>

    )
}

export default AddData